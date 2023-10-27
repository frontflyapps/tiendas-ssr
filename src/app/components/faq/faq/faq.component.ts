import { MetaService } from './../../../core/services/meta.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { SafeHtmlPipe } from '../../../core/pipes/safe-html.pipe';
import { ParseLangPipe } from '../../../core/pipes/parse-lang.pipe';
import { NgFor } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  standalone: true,
  imports: [MatExpansionModule, NgFor, TranslateModule, ParseLangPipe, SafeHtmlPipe],
})
export class FaqComponent implements OnInit {
  url = environment.apiUrl + 'faq?filter[$and][status]=enabled&order=id';
  allFaqs: any[] = [];
  lang = 'es';

  constructor(
    private http: HttpClient,
    private translate: TranslateService,
    private metaService: MetaService,
  ) {
    this.metaService.setMeta({
      title: 'Preguntas frecuentes',
      description: environment.meta.mainPage.description,
      keywords: environment.meta.mainPage.keywords,
      shareImg: environment.meta.mainPage.shareImg,
    });
  }

  ngOnInit() {
    this.lang = this.translate.currentLang;
    this.http.get(this.url).subscribe((data: any) => {
      this.allFaqs = data.data;
    });
  }
}
