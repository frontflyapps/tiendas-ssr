import { ShowToastrService } from '../../../core/services/show-toastr/show-toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoggedInUserService } from 'src/app/core/services/loggedInUser/logged-in-user.service';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { RegionsService } from '../../../core/services/regions/regions.service';
import { BusinessService } from '../../../core/services/business/business.service';
import { ImagePickerConf } from '@guajiritos/image-picker';
import { EMAIL_REGEX, NIT, PHONE } from '../../../core/classes/regex.const';
import { DOCUMENT, NgIf, NgFor } from '@angular/common';
import { Subject } from 'rxjs';
import { UtilsService } from '../../../core/services/utils/utils.service';
import { BankService } from '../../../core/services/bank/bank.service';
import { environment } from 'environments/environment';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { IUser } from 'src/app/core/classes/user.class';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GuachosImageComponent } from '../../shared/guachos-image/guachos-image.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-become-a-seller',
  templateUrl: './become-a-seller.component.html',
  styleUrls: ['./become-a-seller.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    GuachosImageComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    MatDividerModule,
    MatSelectModule,
    NgFor,
    MatOptionModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatExpansionModule,
    TranslateModule,
  ],
})
export class BecomeASellerComponent implements OnInit {
  form: FormGroup;
  basicForm: FormGroup;
  ownerForm: FormGroup;
  checkboxForm: FormGroup;
  firstStep: any;
  ownerInfo: any;
  logo = environment.logoWhite;
  imageUrl = environment.imageUrl;
  secondStep: any;
  thirdStep: any;
  allProvinces: any[] = [];
  municipalities: any[] = [];
  allMunicipalities: any[] = [];
  allBanks: any[] = [];
  allBranchs: any[] = [];
  branchs: any[] = [];
  isBasicInfoChanged = false;
  startDate = new Date(1985, 1, 1);
  // zoom = 12;
  // center: google.maps.LatLngLiteral;
  // options: google.maps.MapOptions = {
  //   mapTypeId: 'hybrid',
  //   zoomControl: false,
  //   scrollwheel: false,
  //   disableDoubleClickZoom: false,
  //   maxZoom: 15,
  //   minZoom: 8,
  // };

  imagePickerConf: ImagePickerConf = {
    borderRadius: '50%',
    language: 'es',
    width: '150px',
    height: '150px',
  };
  imageBusinessChange = false;
  imageBusiness?: string = undefined;
  imageSelected = false;
  loggedInUser: IUser | null = null;

  _unsubscribeAll: Subject<any>;

  managementForm: {
    viewValue: string;
    id: string;
    value: boolean;
  }[] = [
    {
      viewValue: 'Estatal (Empresa, Pymes, Mixta, CNA, CPA, CCS, PDL)',
      id: 'estatal',
      value: false,
    },
    {
      viewValue: 'No estatal (Pymes, TCP, CCS, PDL)',
      id: 'pymes',
      value: true,
    },
  ];
  today = new Date();

  constructor(
    private fb: FormBuilder,
    private regionService: RegionsService,
    private loggedInUserService: LoggedInUserService,
    private businessService: BusinessService,
    public utilsService: UtilsService,
    private bankService: BankService,
    private spinner: NgxSpinnerService,
    private showToastr: ShowToastrService,
    private translate: TranslateService,
    private router: Router,
    private storageService: StorageService,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this._unsubscribeAll = new Subject<any>();
    this.loggedInUser = this.loggedInUserService.getLoggedInUser();
    if (this.storageService.getItem('bs_image')) {
      this.imageBusiness = this.storageService.getItem('bs_image');
      if (this.imageSelected !== undefined) {
      }
    }
    this.firstStep = JSON.parse(this.storageService.getItem('bs_step_one'));
    this.ownerInfo = JSON.parse(this.storageService.getItem('ownerInfo'));

    this.buildForm();
    this.fetchDaTa();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      (document.body.scrollTop > 64 || document.documentElement.scrollTop > 64) &&
      window.innerWidth > 937
    ) {
      document.getElementById('questions-bar')?.classList.add('fixed-bar');
    } else {
      document.getElementById('questions-bar')?.classList.remove('fixed-bar');
    }
  }

  ngOnInit(): void {
    this.basicForm.valueChanges.subscribe(() => {
      this.isBasicInfoChanged = true;
    });
  }

  buildForm() {
    this.basicForm = this.fb.group({
      name: [this.firstStep ? this.firstStep.name : null, [Validators.required]],
      description: [this.firstStep ? this.firstStep.description : null],

      selfEmployed: [this.firstStep ? this.firstStep.selfEmployed : null, [Validators.required]],
      nit: [this.firstStep ? this.firstStep.nit : null, [Validators.pattern(NIT)]],
      reuup: [this.firstStep ? this.firstStep?.reuup : null, [Validators.pattern(NIT)]],

      cellphone: [
        this.firstStep ? this.firstStep.cellphone : null,
        [Validators.required, Validators.pattern(PHONE)],
      ],
      telephone: [this.firstStep ? this.firstStep.telephone : null, [Validators.pattern(PHONE)]],
      email: [
        this.firstStep ? this.firstStep.email : null,
        [Validators.required, Validators.pattern(EMAIL_REGEX)],
      ],
      CountryId: [this.firstStep ? this.firstStep.CountryId : 59, [Validators.required]],

      // OwnerInfo
      owner: this.fb.group({
        name: [this.ownerInfo?.name, [Validators.required]],
        lastName: [this.ownerInfo?.lastName, [Validators.required]],
        charge: [this.ownerInfo ? this.ownerInfo.charge : null, [Validators.required]],
        phone: [
          this.ownerInfo ? this.ownerInfo.phone : null,
          [Validators.required, Validators.pattern(PHONE)],
        ],
        email: [
          this.ownerInfo ? this.ownerInfo.email : null,
          [Validators.required, Validators.pattern(EMAIL_REGEX)],
        ],
        ci: [
          this.ownerInfo ? this.ownerInfo.ci : null,
          [Validators.required, Validators.minLength(11), Validators.maxLength(11)],
        ],
      }),

      // locationForm
      ProvinceId: [this.firstStep ? this.firstStep.ProvinceId : null, [Validators.required]],
      MunicipalityId: [
        this.firstStep ? this.firstStep.MunicipalityId : null,
        [Validators.required],
      ],
      address: [this.firstStep ? this.firstStep.address : null, [Validators.required]],
      longitude: [this.firstStep ? this.firstStep.longitude : null, []],
      latitude: [this.firstStep ? this.firstStep.latitude : null, []],
      checked: [false, [Validators.required]],
    });
  }

  onImageChange(dataUri: any) {
    this.imageBusinessChange = true;
    this.imageBusiness = dataUri;
    this.imageSelected = true;
  }

  compare(f1: any, f2: any) {
    return f1?.name === f2?.name;
  }

  onSelectProvince(provinceId: any) {
    this.municipalities = this.allMunicipalities.filter((item) => item.ProvinceId == provinceId);
    this.basicForm.get('MunicipalityId')?.setValue(null);
  }

  fetchDaTa() {
    this.regionService.getProvinces().subscribe((data) => {
      this.allProvinces = data.data;
    });
    this.regionService.getMunicipalities().subscribe((data) => {
      this.allMunicipalities = data.data;
      this.municipalities = this.allMunicipalities.filter(
        (item) => item.ProvinceId == this.basicForm.get('ProvinceId')?.value,
      );
    });
    this.bankService.getAllBank().subscribe((data) => {
      this.allBanks = [...data.data];
    });
  }

  // getBranchsByBank(id: any) {
  //   let data = { businessId: id };
  //   this.bankService.getAllBranch(data).subscribe((data) => {
  //     this.allBranchs = [...data.data];
  //   });
  // }

  selectSelfEmployed(event: any) {}

  saveInfo() {
    this.storageService.setItem('bs_image', this.imageBusiness);
    this.storageService.setItem('bs_step_one', JSON.stringify(this.basicForm.value));
    this.storageService.setItem('ownerInfo', JSON.stringify(this.basicForm.get('owner')?.value));
  }

  fillLoggedInfo() {
    this.basicForm
      .get('owner')
      ?.get('name')
      ?.setValue(this.loggedInUser?.name);
    this.basicForm
      .get('owner')
      ?.get('lastName')
      ?.setValue(this.loggedInUser?.lastName);
    this.basicForm
      .get('owner')
      ?.get('phone')
      ?.setValue(this.loggedInUser?.phone);
    this.basicForm
      .get('owner')
      ?.get('ci')
      ?.setValue(this.loggedInUser?.ci);
    this.basicForm
      .get('owner')
      ?.get('email')
      ?.setValue(this.loggedInUser?.email);
    this.basicForm.get('owner')?.get('charge')?.setValue(null);
  }

  onCreateBusiness() {
    this.saveInfo();
    this.spinner.show();
    const data = {
      business: { ...this.basicForm.value },
      owner: { ...this.basicForm.get('owner')?.value },
    };
    // data.business.card = data.owner.card;
    data.business.logo = this.imageBusiness;
    // delete data.owner.card;

    this.businessService.createBussines(data).subscribe(
      () => {
        this.showToastr.showSucces(
          this.translate.instant(
            'Su solicitud de negocio ha sido creada exitosamente, nos pondremos en contacto con usted para comunicarle el proceso de aprobacion',
          ),
          'Éxito',
          8000,
        );
        this.storageService.removeItem('bs_image');
        this.storageService.removeItem('bs_step_one');
        this.storageService.removeItem('bs_step_two');
        this.storageService.removeItem('bs_step_three');
        this.spinner.hide();
        this.router.navigate(['']).then();
      },
      () => {
        this.spinner.hide();
      },
    );
  }
}
