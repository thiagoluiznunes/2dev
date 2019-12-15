import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  Renderer2,
  ComponentRef,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
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

  // textRef: Array<ComponentRef<any>>;
  textRef: ComponentRef<any>;

  constructor(
    private service: CreateArticleService,
    private renderer: Renderer2
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // const ref = this.service.createComponent(this.articleBodySection, 'paragraph');
    // ref.instance.destroyTextArea.subscribe(data => {
    //   if (data) {
    //     ref.destroy();
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
          const ref = this.service.createComponent(this.articleBodySection, 'paragraph');
          ref.instance.destroyTextArea.subscribe(data => {
            if (data) {
              ref.destroy();
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
