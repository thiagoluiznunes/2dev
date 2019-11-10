import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutosizeModule } from 'ngx-autosize';
import { CreateArticleRoutingModule } from './create-article-routing.module';
import { CreateArticleComponent } from './create-article.component';
import { CreateArticleService } from './create-article.service';
import { TextAreaComponent } from './textarea/textarea.component';

@NgModule({
  declarations: [
    CreateArticleComponent,
    TextAreaComponent
  ],
  imports: [
    CommonModule,
    CreateArticleRoutingModule,
    AutosizeModule
  ],
  exports: [
    CreateArticleComponent,
    TextAreaComponent
  ],
  providers: [
    CreateArticleService
  ],
  entryComponents: [TextAreaComponent]
})
export class CreateArticleModule { }
