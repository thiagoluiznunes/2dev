import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CreateArticleModule } from './create-article/create-article.module';

import { SimpleArticleComponent } from './simple-article/simple-article.component';
import { GridArticleComponent } from './grid-article/grid-article.component';
import { RowArticleComponent } from './row-article/row-article.component';
import { PageArticleComponent } from './page-article/page-article.component';
import { ParagraphComponent } from './page-article/paragraph/paragraph.component';
import { FigureComponent } from './page-article/figure/figure.component';
import { UserDetailResolver } from 'src/app/core/guards/user.detail.guard';
import { ArticlesDetailResolver } from 'src/app/core/guards/articles.detail.guard';

@NgModule({
  declarations: [
    SimpleArticleComponent,
    GridArticleComponent,
    RowArticleComponent,
    PageArticleComponent,
    ParagraphComponent,
    FigureComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CreateArticleModule,
  ],
  providers: [
    UserDetailResolver,
    ArticlesDetailResolver,
  ],
  exports: [
    SimpleArticleComponent,
    GridArticleComponent,
    RowArticleComponent,
    PageArticleComponent,
    ParagraphComponent,
  ]
})
export class ArticlesModule { }
