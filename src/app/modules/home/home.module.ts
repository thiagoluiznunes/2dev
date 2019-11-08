import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { UiModule } from '../ui/ui.module';
import { HomeRoutingModule } from './home.routing.module';
import { UserDetailResolver } from 'src/app/core/guards/user.detail.guard';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { ArticlesModule } from './articles/articles.module';
import { HomeArticlesDetailResolver } from 'src/app/core/guards/home-articles.detail.guard';
import { ArticlesDetailResolver } from 'src/app/core/guards/articles.detail.guard';

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    UiModule,
    ArticlesModule
  ],
  providers: [
    UserDetailResolver,
    HomeArticlesDetailResolver,
    ArticlesDetailResolver
  ]
})
export class HomeModule { }
