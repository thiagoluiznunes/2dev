import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  @ViewChild('titleTextArea', { static: false }) titleTextArea: ElementRef;
  title: String = '';

  constructor() { }

  ngOnInit() {
  }

  onKeyTitle(event: any) { // without type info
    if (event.key !== 'ENTER' || event.keyCode === 13 ) {
      event.preventDefault();
    }
  }

}
