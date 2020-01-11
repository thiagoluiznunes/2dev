import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.css']
})
export class FigureComponent implements OnInit, AfterViewInit {

  @ViewChild('divFigureRef', { static: false }) divFigureRef: ElementRef;
  @ViewChild('imgFigureRef', { static: false }) imgFigureRef: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.imgFigureRef.nativeElement.src = '/assets/imgs/profile.jpeg';
  }
}
