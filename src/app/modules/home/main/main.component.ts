import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges {


  latestArticles: JSON;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(
      data => {
        this.latestArticles = data.articles;
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Before ngOnInit');
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
  }

}
