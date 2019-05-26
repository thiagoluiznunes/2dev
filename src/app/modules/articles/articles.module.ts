import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleArticleComponent } from './simple-article/simple-article.component';
import { GridArticleComponent } from './grid-article/grid-article.component';
import { RowArticleComponent } from './row-article/row-article.component';

@NgModule({
  declarations: [
    SimpleArticleComponent,
    GridArticleComponent,
    RowArticleComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  exports: [
    SimpleArticleComponent,
    GridArticleComponent,
    RowArticleComponent
  ]
})
export class ArticlesModule { }
