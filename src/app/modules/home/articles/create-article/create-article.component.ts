import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  Renderer2,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CreateArticleService } from './create-article.service';
import { TextAreaService } from './textarea/textarea.service';
import { FigureService } from './figure/figure.service';

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
    private articleService: CreateArticleService,
    private textService: TextAreaService,
    private figureService: FigureService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.articleService.bodySectionRef = this.articleBodySection;

    const firstTextArea = this.textService.createComponent(this.articleBodySection, 0);
    firstTextArea.instance.destroyTextArea.subscribe(data => {
      if (data) {
        this.articleService.removeComponentFromBodySection(firstTextArea);
      }
    });

    const imageTest = this.figureService.createComponent(this.articleBodySection, 0);
    // imageTest.instance.destroyTextArea.subscribe(data => {
    //   if (data) {
    //     this.articleService.removeComponentFromBodySection(imageTest);
    //   }
    // });

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
          const ref = this.textService.createComponent(this.articleBodySection, 0);
          ref.instance.destroyTextArea.subscribe(data => {
            if (data) {
              this.articleService.removeComponentFromBodySection(ref);
            }
          });
        }
      });
  }

  reciverFeedback(response) {
    console.log('Foi emitido o evento e chegou no pai >>>> ', response);
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
