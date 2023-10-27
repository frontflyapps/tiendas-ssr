import { PipesModule } from './../../core/pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq/faq.component';

import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    FaqRoutingModule,
    MatExpansionModule,
    TranslateModule,
    PipesModule,
    FaqComponent,
  ],
})
export class FaqModule {}
