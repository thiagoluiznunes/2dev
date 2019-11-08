import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { HomeArticlesDetailResolver } from 'src/app/core/guards/home-articles.detail.guard';
import { PageArticleComponent } from './articles/page-article/page-article.component';
import { ArticlesDetailResolver } from 'src/app/core/guards/articles.detail.guard';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        resolve: { articles: HomeArticlesDetailResolver },
        component: MainComponent
      },
      {
        path: 'contato',
        component: ContactComponent
      },
      {
        path: 'artigo',
        children: [
          {
            path: ':autor/:_id',
            resolve: { articleDetail: ArticlesDetailResolver },
            component: PageArticleComponent
          },
          {
            path: 'criar',
            canActivate: [AuthGuard],
            component: PageArticleComponent
          },
          {
            path: '**',
            pathMatch: 'full',
            redirectTo: 'overview'
          },
        ]
      },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];


@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
