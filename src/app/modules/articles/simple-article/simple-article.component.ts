import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-simple-article',
  templateUrl: './simple-article.component.html',
  styleUrls: ['./simple-article.component.css']
})
export class SimpleArticleComponent implements OnInit {

  @Input() articleBody: any;
  labelDate: String;

  constructor() { }

  ngOnInit() {
    const date = new Date(this.articleBody.createdAt);
    moment.locale('pt-BR');
    this.labelDate = moment(date).format('ll');
  }

}
