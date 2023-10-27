import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ReferredService } from '../../core/services/referred/referred.service';
import { LoggedInUserService } from '../../core/services/loggedInUser/logged-in-user.service';
import { componentName } from './componentNameEnum';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-referred-layout',
  templateUrl: './referred-layout.component.html',
  styleUrls: ['./referred-layout.component.scss'],
  providers: [ReferredService],
})
export class ReferredLayoutComponent implements OnInit {
  form: UntypedFormGroup;
  urlLink = environment.url + 'my-account?modal=registration';
  data: any;
  //hasLink: boolean = true;
  loading = false;
  loggedInUser: any = null;
  userLinkReferred!: string;
  componentName = componentName;
  showinviteComponent = true;

  constructor(
    private elementService: ReferredService,
    private loggedInUserService: LoggedInUserService,
    private spinner: NgxSpinnerService,
  ) {
    this.loggedInUser = this.loggedInUserService.getLoggedInUser();
  }

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData() {
    this.spinner.show();
    this.loading = true;
    console.log(this.loggedInUser);
    const data = {
      personId: this.loggedInUser?.id,
    };
    this.elementService.get(data.personId).subscribe({
      next: (user) => {
        if (user) {
          this.data = user.data;
          if (this.data?.Codes.length > 0) {
            this.userLinkReferred = this.urlLink + '&ref=' + this.data?.Codes[0].code;
          }
        }
        this.spinner.hide();
        this.loading = false;
      },
      error: (error) => {
        this.spinner.hide();
        //this.hasLink = false;
        this.loading = false;
        this.showinviteComponent = true;
      },
    });
  }

  showComponent(componentName: componentName) {
    this.showinviteComponent = componentName == this.componentName.InviteFriendComponent;
    this.refreshData();
  }
}
