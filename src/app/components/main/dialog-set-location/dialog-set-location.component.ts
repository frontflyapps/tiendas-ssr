import {
  Component,
  Inject,
  HostListener,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import {
  AbstractControl,
  UntypedFormBuilder,
  UntypedFormGroup,
  ValidatorFn,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { LocationService } from '../../../core/services/location/location.service';
import { Subject } from 'rxjs';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { DisplayOption, RestrictionFilter } from '@guajiritos/general-autocomplete';
import { environment } from 'environments/environment';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { GuajiritosGeneralAutocomplete } from '@guajiritos/general-autocomplete';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dialog-set-location',
  templateUrl: './dialog-set-location.component.html',
  styleUrls: ['./dialog-set-location.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    MatDialogModule,
    MatIconModule,
    GuajiritosGeneralAutocomplete,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    MatButtonModule,
    TranslateModule,
  ],
})
export class DialogSetLocationComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogSetLocationComponent>,
    private fb: UntypedFormBuilder,
    private locationService: LocationService,
    public translate: TranslateService,
  ) {
    this.storageLocation = data;
  }
  _unsubscribeAll: Subject<any>;
  innerWidth: any;
  applyStyle = false;
  urlProvince = environment.apiUrl + 'province';
  urlMunicipality = environment.apiUrl + 'municipality';
  public locationForm: UntypedFormGroup;
  storageLocation: any;
  public allProvinces: any[];
  public allMunicipalityByProvince: any[];
  private dataResult: any = {};

  public displayOptions: DisplayOption = {
    firthLabel: [
      {
        type: 'path',
        path: ['name'],
      },
    ],
  };
  public eventDisplayRestrictions: RestrictionFilter[];
  private static valueSelected(): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (typeof c === 'object' && c.value?.id) {
        return null;
      } else {
        return { match: true };
      }
    };
  }

  compare(f1: any, f2: any) {
    return f1?.name === f2?.name;
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.innerWidth = window.innerWidth;
    this.applyStyle = this.innerWidth <= 600;
  }

  ngOnInit(): void {
    this.initForm();
    // this.subsForm();
    this.onResize();
    this.locationForm.get('province').valueChanges.subscribe((item) => {
      if (item) {
        this.onSelectProvince(item);
      }
    });
  }

  private initForm() {
    this.locationForm = this.fb.group({
      province: [
        this.storageLocation ? this.storageLocation?.provinceData : null,
        [Validators.required, DialogSetLocationComponent.valueSelected()],
      ],
      municipality: [
        this.storageLocation ? this.storageLocation?.municipalityData : null,
        [DialogSetLocationComponent.valueSelected()],
      ],
    });

    /*--Cuanto se esta editando--*/
    if (this.locationForm.get('province').value) {
      this.getProvincesById(this.locationForm.get('province').value.id);
      this.eventDisplayRestrictions = [
        {
          value: this.locationForm.get('province').value?.id,
          filter: 'filter[$and][ProvinceId]',
        },
      ];
    }
  }

  public setDataResponse() {
    this.dataResult.municipality = this.locationForm.get('municipality').value;
    this.dataResult.province = this.locationForm.get('province').value;
    // this.dataResult.business = this.locationForm.get('business').value;
    return this.dataResult;
  }

  ngOnDestroy(): void {
    if (this._unsubscribeAll) {
      this._unsubscribeAll.next('');
      this._unsubscribeAll.complete();
      this._unsubscribeAll.unsubscribe();
    }
  }

  private getProvincesById(id) {
    this.locationService.getProvinceById(id).subscribe((responseData) => {
      this.allMunicipalityByProvince = responseData.data?.Municipalities;
    });
  }

  onSelectProvince(event) {
    this.eventDisplayRestrictions = [
      {
        value: event?.id,
        filter: 'filter[$and][ProvinceId]',
      },
    ];
  }
}
