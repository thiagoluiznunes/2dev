import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { PageArticleComponent } from '../articles/page-article/page-article.component';

const homeRoutes: Routes = [
  // {
  //   path: 'main',
  //   loadChildren: './main/main.module#MainModule',
  // },
  // {
  //   path: 'contact',
  //   loadChildren: './contact/contact.module#ContactModule',
  // },
  // {
  //   path: '',
  //   resolve: { user: UserDetailResolver },
  //   loadChildren: './main/main.module#MainModule'
  // },
  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   redirectTo: ''
  // },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'main' },
      { path: 'main', component: MainComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'article/:author/:id', component: PageArticleComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'main' },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
