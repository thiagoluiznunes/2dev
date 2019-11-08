import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    // loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
    // loadChildren: './modules/login/login.module#LoginModule',
  },
  {
    path: 'signup',
    loadChildren: () => import('./modules/signup/signup.module').then(m => m.SignupModule),
    // loadChildren: './modules/signup/signup.module#SignupModule',
  },
  // {
  //   path: 'article',
  //   loadChildren: () => import('./modules/home/articles/articles.module').then(m => m.ArticlesModule),
  //   // loadChildren: './modules/articles/articles.module#ArticlesModule',
  // },
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    // loadChildren: './modules/home/home.module#HomeModule',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
