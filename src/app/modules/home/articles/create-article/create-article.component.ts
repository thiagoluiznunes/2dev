import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
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

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  onKeyTitle(event: any) { // without type info
    if (event.key !== 'ENTER' || event.keyCode === 13) {
    }
  }

  ngAfterViewInit() {
    const obs = fromEvent(this.titleTextArea.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value), // extract the value of the input
        debounceTime(5000),
        distinctUntilChanged()
      ).subscribe(data => {
        console.log(data);
      });
  }

  focusFunction(): void {
    this.renderer.setStyle(this.titleSpan.nativeElement, 'opacity', '1');
  }

  focusOutFunction(): void {
    this.renderer.setStyle(this.titleSpan.nativeElement, 'opacity', '0');
  }
}
