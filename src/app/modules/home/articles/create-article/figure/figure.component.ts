import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef, Input, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.css']
})
export class FigureComponent implements OnInit, AfterViewInit {

  @ViewChild('divFigureRef', { static: false }) divFigureRef: ElementRef;
  @ViewChild('imgFigureRef', { static: false }) imgFigureRef: ElementRef;

  borderStatus: boolean;

  constructor(private renderer: Renderer2) {
    this.borderStatus = false;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.imgFigureRef.nativeElement.src = '/assets/imgs/profile.jpeg';
  }

  @HostListener('document:click', ['$event'])
  onClickOutside($event) {
    const clickedInside = this.imgFigureRef.nativeElement.contains($event.target);
    if (clickedInside) {
      this.renderer.setStyle(this.imgFigureRef.nativeElement, 'border-color', '#1976d2');
      this.borderStatus = true;
    } else if (!clickedInside && this.borderStatus) {
      this.renderer.setStyle(this.imgFigureRef.nativeElement, 'border-color', 'transparent');
    }
  }
}
