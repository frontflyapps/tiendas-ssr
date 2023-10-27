import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorRoutingModule } from './error-routing.module';
import { ForbiddenAccessComponent } from './forbidden-access/forbidden-access.component';

import { OutdatedVersionComponent } from './outdated-version/outdated-version.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LostConexionComponent } from './lost-conexion/lost-conexion.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    ErrorRoutingModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule,
    ForbiddenAccessComponent,
    OutdatedVersionComponent,
    LostConexionComponent,
    NotFoundComponent,
  ],
})
export class ErrorModule {}
