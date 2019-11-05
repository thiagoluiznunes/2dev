import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-grid-article',
  templateUrl: './grid-article.component.html',
  styleUrls: ['./grid-article.component.css']
})
export class GridArticleComponent implements OnInit {

  @Input() articleBody: any;
  labelDate: String;

  constructor() {
  }
  ngOnInit() {
    const date = new Date(this.articleBody.createdAt);
    moment.locale('pt-BR');
    this.labelDate = moment(date).format('ll');
  }

}
