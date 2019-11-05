import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-row-article',
  templateUrl: './row-article.component.html',
  styleUrls: ['./row-article.component.css']
})
export class RowArticleComponent implements OnInit {

  @Input() articleBody: any;
  labelDate: String;

  constructor() { }

  ngOnInit() {
    const date = new Date(this.articleBody.createdAt);
    moment.locale('pt-BR');
    this.labelDate = moment(date).format('ll');
  }
}
