import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Renderer2, OnChanges, SimpleChanges, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit, AfterViewInit {

  @ViewChild('titleSpan', { static: false }) titleSpan: ElementRef;
  @ViewChild('titleTextArea', { static: false }) titleTextArea: ElementRef;
  title: String = '';
  placeHolder: String = 'Título';

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
  // if (event.key === 'Enter') {
  //   this.titleTextArea.nativeElement.rows += 1;
  // }
  ngAfterViewInit() {
    fromEvent(this.titleTextArea.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value), // extract the value of the input
        debounceTime(5000),
        distinctUntilChanged()
      ).subscribe(data => {
        console.log('Observable fromEvent: ', data);
      });
  }

  focusFunction(): void {
    this.renderer.setStyle(this.titleSpan.nativeElement, 'opacity', '1');
    this.placeHolder = '';
  }

  focusOutFunction(): void {
    this.renderer.setStyle(this.titleSpan.nativeElement, 'opacity', '0');
    this.placeHolder = 'Título';
  }

  // @HostListener('document:click', ['$event'])
  // onClickOutside($event) {
  //   const titleClicked = this.titleH1.nativeElement.contains($event.target);
  //   if (!titleClicked) {
  //     this.renderer.setStyle(this.titleSpan.nativeElement, 'opacity', '0');
  //   }
  // }
  // titleClick(): void {
  //   this.renderer.setStyle(this.titleSpan.nativeElement, 'opacity', '1');
  // }
}
