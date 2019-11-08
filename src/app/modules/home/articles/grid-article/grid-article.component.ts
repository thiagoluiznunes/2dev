import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-article',
  templateUrl: './grid-article.component.html',
  styleUrls: ['./grid-article.component.css']
})
export class GridArticleComponent implements OnInit {

  @Input() articleBody: any;
  labelDate: String;

  constructor(private router: Router) {
  }

  ngOnInit() {
    const date = new Date(this.articleBody.createdAt);
    moment.locale('pt-BR');
    this.labelDate = moment(date).format('ll');
  }

  gridArticleClick() {
    this.router.navigate(['artigo', this.articleBody.username, this.articleBody._id]);
  }
}
