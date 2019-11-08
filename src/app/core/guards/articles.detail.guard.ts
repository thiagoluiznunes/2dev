import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleService } from 'src/app/modules/home/articles/articles.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ArticlesDetailResolver implements Resolve<any> {

  constructor(private articleService: ArticleService) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {

    return this.articleService.getArticleById(route.params._id)
      .pipe(
        map(data => {
          return data;
        }),
        catchError((err) => {
          return err;
        })
      );
  }
}

