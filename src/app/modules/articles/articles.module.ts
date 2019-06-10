import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleArticleComponent } from './simple-article/simple-article.component';
import { GridArticleComponent } from './grid-article/grid-article.component';
import { RowArticleComponent } from './row-article/row-article.component';
import { PageArticleComponent } from './page-article/page-article.component';
import { ParagraphComponent } from './page-article/paragraph/paragraph.component';
import { FigureComponent } from './page-article/figure/figure.component';

@NgModule({
  declarations: [
    SimpleArticleComponent,
    GridArticleComponent,
    RowArticleComponent,
    PageArticleComponent,
    ParagraphComponent,
    FigureComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  exports: [
    SimpleArticleComponent,
    GridArticleComponent,
    RowArticleComponent,
    PageArticleComponent,
    ParagraphComponent
  ]
})
export class ArticlesModule { }
