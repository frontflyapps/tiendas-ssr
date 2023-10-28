import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-forbidden-access',
  templateUrl: './forbidden-access.component.html',
  styleUrls: ['./forbidden-access.component.scss'],
  standalone: true,
  imports: [MatButtonModule, TranslateModule],
})
export class ForbiddenAccessComponent {
  constructor(private router: Router) {}

  onBacktoHome() {
    this.router.navigate(['']);
  }
}
