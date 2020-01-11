import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.css']
})
export class FigureComponent implements OnInit, AfterViewInit {

  @ViewChild('divFigureRef', { static: false }) divFigureRef: ElementRef;
  @ViewChild('imgFigureRef', { static: false }) imgFigureRef: ElementRef;

  imgSrc = '/assets/imgs/profile.jpeg';

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }
}
