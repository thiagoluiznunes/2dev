import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.css']
})
export class PageArticleComponent implements OnInit {

  article: any;
  labelDate: String;
  scrollActivated: boolean;
  facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(DOCUMENT) private document: Document) {
    this.scrollActivated = false;
    this.route.data.subscribe(
      data => {
        this.article = data.articleDetail;
      }
    );
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100) {
      this.scrollActivated = true;
    } else {
      this.scrollActivated = false;
    }
  }

  ngOnInit() {
    const date = new Date(this.article.createdAt);
    moment.locale('pt-BR');
    this.labelDate = moment(date).format('ll');
  }

  shareOnFaceBook() {
    const facebook = 'https://www.facebook.com/sharer/sharer.php?u=';
    this.router.navigateByUrl(`${facebook}${window.location.href}`);
  }
}
