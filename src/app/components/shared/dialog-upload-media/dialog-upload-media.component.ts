import {
  Component,
  Inject,
  HostListener,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoggedInUserService } from '../../../core/services/loggedInUser/logged-in-user.service';
import { UtilsService } from '../../../core/services/utils/utils.service';
import { UploadTypesEnum } from '../file-upload/upload-types.enum';
import { environment } from 'environments/environment';
import { TranslateModule } from '@ngx-translate/core';
import { FileUploaderComponent } from '../file-upload/file-uploader/file-uploader.component';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ShowToastrService } from 'src/app/core/services/show-toastr/show-toastr.service';

@Component({
  selector: 'app-dialog-upload-media',
  templateUrl: './dialog-upload-media.component.html',
  styleUrls: ['./dialog-upload-media.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    NgIf,
    FileUploaderComponent,
    TranslateModule,
  ],
})
export class DialogUploadMediaComponent implements OnInit, OnDestroy {
  isSaving = false;
  isEditing = false;
  innerWidth: any;
  applyStyle = false;
  languages: any[] = [];
  imageUrl: any;
  languageForm: FormControl;
  loggedInUser: any;
  language: any;
  _unsubscribeAll: Subject<any>;

  /////////////////////////////////////////////////////
  countryCtrl = new FormControl();
  url = '';
  uuid = '';
  FileId = null;
  isUploaded = false;

  ////////////////////////////////////////////////////
  product: any = {};
  newFile: any = {};

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogUploadMediaComponent>,
    private loggedInUserService: LoggedInUserService,
    public spinner: NgxSpinnerService,
    public utilsService: UtilsService,
    // private uploadFilesService: UploadFilesService,
    private showToastr: ShowToastrService,
  ) {
    this.dialogRef.disableClose = true;
    this.loggedInUser = this.loggedInUserService.getLoggedInUser();
    this.loggedInUser.token = this.loggedInUserService.getTokenCookie();
    this._unsubscribeAll = new Subject<any>();

    this.isEditing = data.isEditing;
    this.imageUrl = environment.imageUrl;

    // ------------------LANGUAGE INITIALIZATION----------------
    this.languages = this.loggedInUserService.getlaguages();
    this.language = this.loggedInUserService.getLanguage()
      ? this.loggedInUserService.getLanguage().lang
      : 'es';
    this.languageForm = new FormControl(
      this.loggedInUserService.getLanguage()
        ? this.loggedInUserService.getLanguage()
        : this.languages[0],
    );
    // --------------------------------------------------------------------------------------------------

    this.product = data.product;
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.innerWidth = window.innerWidth;
    this.applyStyle = this.innerWidth <= 600;
  }

  ngOnInit(): void {
    // ////////////////EVENT ASSOCIATED WITH CHANGE LANGUAGE////////////////////////////
    this.languageForm.valueChanges.pipe(takeUntil(this._unsubscribeAll)).subscribe((data) => {
      this.language = data.lang;
    });
    // /////////////////////////////////////////////////////////////////////////////////
    // this.uploadFilesService.$uploadFileEnd.pipe(takeUntil(this._unsubscribeAll)).subscribe((data) => {
    //   if (!this.isUploaded) {
    //     let dataOutput = data.body.data;
    //     this.url = dataOutput.url;
    //     this.dialogRef.close({ url: this.url });
    //   }
    // });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next('');
    this._unsubscribeAll.complete();
  }

  //////////////////////////////////////////

  onSave(): void {
    this.spinner.show();
  }

  onNewFileLoaded(event) {
    this.newFile = event;
  }

  onSaveMedia(event) {
    this.url = event.url + '';
    this.uuid = event.uuid + '';
    this.FileId = event.FileId;
    this.showToastr.showSucces(
      `Su video ha comenzado el proceso de subida, espere a que este completado el proceso para continuar con la creación o edición
      del mismo.`,
      undefined,
      8000,
    );
    // this.uploadFilesService.emitUploadStart(event);
    // let timeout = setTimeout(() => {
    //   this.uploadFilesService
    //     .getUrlFile(this.uuid, this.FileId)
    //     .toPromise()
    //     .then((result: any) => {
    //       this.url = result?.data?.url || '';
    //       if (this.url) {
    //         this.isUploaded = true;
    //         this.dialogRef.close({ url: this.url });
    //       }
    //       clearTimeout(timeout);
    //     });
    // }, 1000);
  }

  fileUploadDone() {
    this.dialogRef.close(this.newFile);
  }
  public get uploadType(): typeof UploadTypesEnum {
    return UploadTypesEnum;
  }

  onSelectMedia(event) {
    this.url = event.url || '';
    this.dialogRef.close({ url: this.url });
    this.dialogRef.close(event);
  }

  ///////////////////////////////////////////////////////////////////////////////////////////
}
