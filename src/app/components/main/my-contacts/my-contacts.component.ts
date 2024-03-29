import {
  Component,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { LoggedInUserService } from '../../../core/services/loggedInUser/logged-in-user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UtilsService } from '../../../core/services/utils/utils.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { RegionsService } from '../../../core/services/regions/regions.service';
import { LocalStorageService } from '../../../core/services/localStorage/localStorage.service';
import { LOCATION_DATA } from '../../../core/classes/global.const';
import { ContactsService } from '../../../core/services/contacts/contacts.service';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import {
  CUBAN_PHONE_START_5,
  EMAIL_REGEX,
  IDENTITY_PASSPORT,
} from '../../../core/classes/regex.const';
import { environment } from 'environments/environment';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-my-contacts',
  templateUrl: './my-contacts.component.html',
  styleUrls: ['./my-contacts.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    NgIf,
    NgFor,
    NgClass,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    TranslateModule,
  ],
})
export class MyContactsComponent implements OnInit, OnDestroy {
  innerWidth: any;
  applyStyle = false;
  loggedInUser: any;
  form: UntypedFormGroup;

  isLoading = false;

  _unsubscribeAll: Subject<any> = new Subject();

  allProvinces: any[] = [];
  allMunicipalities: any[] = [];
  municipalities: any[] = [];

  onCreateContact = false;
  isEditing = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MyContactsComponent>,
    private loggedInUserService: LoggedInUserService,
    private fb: UntypedFormBuilder,
    public spinner: NgxSpinnerService,
    public utilsService: UtilsService,
    public translate: TranslateService,
    private regionService: RegionsService,
    private localStorageService: LocalStorageService,
    public contactsService: ContactsService,
  ) {
    this.dialogRef.disableClose = true;
    this.loggedInUser = this.loggedInUserService.getLoggedInUser();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.innerWidth = window.innerWidth;
    this.applyStyle = this.innerWidth <= 600;
  }

  ngOnInit(): void {
    this.createForm();

    this.setObsContact();
    this.getContacts();

    this.getProvinceMunicipalityFromLocal();
  }

  setObsContact() {
    this.contactsService.allContacts$.pipe(takeUntil(this._unsubscribeAll)).subscribe(
      (response) => {
        this.contactsService.allContacts = response.data;
        this.isLoading = false;
      },
      () => (this.isLoading = false),
    );
  }

  getContacts() {
    this.isLoading = true;
    this.contactsService.getContact.next('');
  }

  getProvinceMunicipalityFromLocal() {
    const locationData = this.localStorageService.getFromStorage(LOCATION_DATA);

    if (
      this.localStorageService.iMostReSearch(
        locationData?.timespan,
        environment.timeToResetSession,
      ) ||
      locationData?.allMunicipalities.length < 1 ||
      locationData?.allProvinces.length < 1
    ) {
      this.getProvinceMunicipality();
    } else {
      this.setProvincesFromResponse(locationData.allProvinces);
      this.setMunicipalitiesFromResponse(locationData.allMunicipalities);
    }
  }

  getProvinceMunicipality() {
    this.regionService.getProvinces().subscribe((data) => {
      this.setProvincesFromResponse(data.data);
    });
    this.regionService.getMunicipalities().subscribe((data) => {
      this.setMunicipalitiesFromResponse(data.data);

      const locationData = {
        allProvinces: this.allProvinces,
        allMunicipalities: this.allMunicipalities,
        timespan: new Date().getTime(),
      };
      this.localStorageService.setOnStorage(LOCATION_DATA, locationData);
    });
  }

  setProvincesFromResponse(res) {
    this.allProvinces = res;
  }

  setMunicipalitiesFromResponse(res) {
    this.allMunicipalities = res;
    this.municipalities = this.allMunicipalities.filter(
      (item) => item.ProvinceId == this.form.get('ProvinceId').value,
    );
  }

  createForm(): void {
    this.form = this.fb.group({
      id: [null],
      selected: [false],
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern(EMAIL_REGEX)]],
      identification: [
        null,
        [
          Validators.required,
          Validators.pattern(IDENTITY_PASSPORT),
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      phone: [
        null,
        [
          Validators.required,
          Validators.pattern(CUBAN_PHONE_START_5),
          Validators.minLength(8),
          Validators.maxLength(8),
        ],
      ],
      street: [null, [Validators.required]],
      number: [null, [Validators.required]],
      between: [null, [Validators.required]],
      MunicipalityId: [null, [Validators.required]],
      ProvinceId: [null, [Validators.required]],
    });
  }

  onMarkAsFeaturedContact(contact) {
    contact.selected = !contact.selected;
    this.setEditingContactDefault(contact);
  }

  genSubxProvince() {
    this.form
      .get('ProvinceId')
      .valueChanges.pipe(debounceTime(200))
      .subscribe((provinceIdCh) => {
        this.onFillMunicipalities(provinceIdCh);
      });
  }

  fillFormByContact(contact) {
    this.form.get('id').setValue(contact?.id || null);
    this.form.get('selected').setValue(contact?.selected || null);
    this.form.get('name').setValue(contact?.name || null);
    this.form.get('lastName').setValue(contact?.lastName || null);
    this.form.get('email').setValue(contact?.email || null);
    this.form.get('identification').setValue(contact?.identification || null);
    this.form.get('phone').setValue(contact?.phone || null);
    this.form.get('street').setValue(contact?.address.street || null);
    this.form.get('number').setValue(contact?.address.number || null);
    this.form.get('between').setValue(contact?.address.between || null);
    this.form.get('MunicipalityId').setValue(contact?.MunicipalityId || null);
    this.form.get('ProvinceId').setValue(contact?.ProvinceId || null);
  }

  onCreateContactFn() {
    this.createForm();
    this.onCreateContact = true;
    this.isEditing = false;
  }

  onSetUpdateContact(): void {
    const temp = this.form.value;
    temp.address = {
      street: temp.street,
      number: temp.number,
      between: temp.between,
    };
    delete temp.street;
    delete temp.number;
    delete temp.between;

    const data = JSON.parse(JSON.stringify(temp));

    if (this.isEditing) {
      this.setEditingContact(data);
      return;
    }

    if (!this.isEditing) {
      delete data.id;
      this.setCreateContact(data);
      return;
    }
  }

  setCreateContact(data) {
    this.contactsService.create(data).subscribe((contactRes) => {
      this.contactsService.allContacts.push({ ...contactRes.data });

      this.onCreateContact = false;
    });
  }

  setEditingContact(data) {
    this.contactsService.edit(data).subscribe((contactRes) => {
      const idx = this.contactsService.allContacts.findIndex((item) => item.id === data.id);

      if (idx >= 0) {
        this.contactsService.allContacts[idx] = { ...contactRes.data };
      }

      this.onCreateContact = false;
    });
  }

  setEditingContactDefault(data) {
    this.contactsService.edit(data).subscribe((contactRes) => {
      const idx = this.contactsService.allContacts.findIndex((item) => item.id === data.id);
      let index = 0;
      this.contactsService.allContacts.forEach(() => {
        if (idx === index) {
          this.contactsService.allContacts[idx] = contactRes.data;
        } else {
          this.contactsService.allContacts[index].selected = !contactRes.data.selected;
        }
        index++;
      });

      this.onCreateContact = false;
    });
  }

  onSetBack() {
    this.createForm();
    this.onCreateContact = false;
  }

  public compareById(val1, val2) {
    return val1 && val2 && val1 == val2;
  }

  editContact(contact) {
    this.isEditing = true;

    this.createForm();
    this.genSubxProvince();

    this.fillFormByContact(contact);

    this.onCreateContact = true;
  }

  removeContact(contact) {
    this.contactsService.remove(contact).then(() => {
      const indexC = this.contactsService.allContacts.findIndex((item) => item.id == contact.id);
      this.contactsService.allContacts.splice(indexC, 1);
    });
  }

  onSelectProvince(provinceId) {
    this.onFillMunicipalities(provinceId);
    this.form.get('MunicipalityId').setValue(null);
  }

  onFillMunicipalities(provinceId) {
    this.municipalities = this.allMunicipalities.filter((item) => item.ProvinceId == provinceId);
  }

  ngOnDestroy() {
    if (this._unsubscribeAll) {
      this._unsubscribeAll.next(true);
      this._unsubscribeAll.complete();
      this._unsubscribeAll.unsubscribe();
    }
  }
}
