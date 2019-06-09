import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleArticleComponent } from './simple-article/simple-article.component';
import { GridArticleComponent } from './grid-article/grid-article.component';
import { RowArticleComponent } from './row-article/row-article.component';
import { PageArticleComponent } from './page-article/page-article.component';

@NgModule({
  declarations: [
    SimpleArticleComponent,
    GridArticleComponent,
    RowArticleComponent,
    PageArticleComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  exports: [
    SimpleArticleComponent,
    GridArticleComponent,
    RowArticleComponent,
    PageArticleComponent
  ]
})
export class ArticlesModule { }
