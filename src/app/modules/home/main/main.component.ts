import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  article: { type: string, data: string }[] = [
    {
      type: 'PARAGRAPH',
      data: 'It is a paragraph data to be used for everyone!'
    },
    {
      type: 'FIGURE',
      data: 'It is a figure data to be used for everyone!'
    },
    {
      type: 'PARAGRAPH',
      data: 'It is a paragraph data to be used for everyone!'
    },
    {
      type: 'FIGURE',
      data: 'It is a figure data to be used for everyone!'
    },
  ];

  mostRatedArticles: Object = [
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ];
  constructor() { }

  ngOnInit() {
  }

}
