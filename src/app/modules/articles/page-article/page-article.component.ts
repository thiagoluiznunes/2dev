import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.css']
})
export class PageArticleComponent implements OnInit {

  @Input() data: { type: string, data: string }[];

  constructor() { }

  ngOnInit() {
    // console.log(this.data);
  }

}
