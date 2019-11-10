import {
  Component, OnInit, ElementRef, ViewChild, ViewContainerRef, AfterViewInit,
  Renderer2,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TextAreaComponent } from './textarea/textarea.component';
import { CreateArticleService } from './create-article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit, AfterViewInit {

  @ViewChild('titleSpan', { static: false }) titleSpan: ElementRef;
  @ViewChild('titleTextArea', { static: false }) titleTextArea: ElementRef;
  @ViewChild('articleBodySection', { read: ViewContainerRef, static: false }) articleBodySection;

  title: String = '';
  placeHolder: String = 'Título';

  constructor(
    private service: CreateArticleService,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    fromEvent(this.titleTextArea.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value),
        debounceTime(5000),
        distinctUntilChanged()
      ).subscribe(data => {
        // TODO: Send article to backend
        console.log('Observable fromEvent: ', data);
      });

    fromEvent(this.titleTextArea.nativeElement, 'keydown')
      .pipe(
        map((e: any) => e),
        distinctUntilChanged()
      ).subscribe(e => {
        if (e.key === 'Enter') {
          this.service.createComponent(this.articleBodySection, 'paragraph');
        }
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

}
