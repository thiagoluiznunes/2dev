import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutosizeModule } from 'ngx-autosize';
import { CreateArticleRoutingModule } from './create-article-routing.module';
import { CreateArticleComponent } from './create-article.component';
import { TextAreaComponent } from './textarea/textarea.component';
import { CreateArticleService } from './create-article.service';
import { TextAreaService } from './textarea/textarea.service';
import { FigureComponent } from './figure/figure.component';
import { FigureService } from './figure/figure.service';


@NgModule({
  declarations: [
    CreateArticleComponent,
    TextAreaComponent,
    FigureComponent,
  ],
  imports: [
    CommonModule,
    CreateArticleRoutingModule,
    AutosizeModule,
  ],
  exports: [
    CreateArticleComponent,
    // TextAreaComponent,
    // FigureComponent,
  ],
  providers: [
    CreateArticleService,
    TextAreaService,
    FigureService,
  ],
  entryComponents: [TextAreaComponent, FigureComponent]
})
export class CreateArticleModule { }
