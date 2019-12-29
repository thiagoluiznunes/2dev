import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Renderer2,
  ComponentFactory,
  ComponentFactoryResolver,
  HostListener,
  ComponentRef,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { CreateArticleService } from '../create-article.service';
import { FigureService } from '../figure/figure.service';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextAreaComponent implements OnInit, OnDestroy, AfterViewInit {

  placeHolder = 'Digite seu text';

  @Output() destroyTextArea = new EventEmitter();
  @ViewChild('textAreaRef', { static: false }) textAreaRef: ElementRef;
  @ViewChild('buttonAreaRef', { static: false }) buttonAreaRef: ElementRef;
  @ViewChild('buttonCamRef', { static: false }) buttonCamRef: ElementRef;
  @ViewChild('buttonGitHubRef', { static: false }) buttoGitHubRef: ElementRef;
  @ViewChild('divSelectOptions', { static: false }) divSelectOptions: ElementRef;

  ref: ComponentRef<any>;
  isFocused = false;
  id: any;

  constructor(
    private renderer: Renderer2,
    private service: CreateArticleService,
    private resolver: ComponentFactoryResolver,
    private figureService: FigureService,
    private articleService: CreateArticleService
  ) { }

  createTextAreaComponent(index?: number) {
    let factory: ComponentFactory<any>;
    let ref = null;
    factory = this.resolver.resolveComponentFactory(TextAreaComponent);
    if (index !== null && index !== undefined) {
      this.articleService.changePosition(index + 1);
      ref = this.service.bodySectionRef.createComponent(factory, index + 1);
    } else {
      ref = this.service.bodySectionRef.createComponent(factory);
    }
    ref.instance.id = this.service.bodySectionRef.indexOf(ref.hostView);

    return ref;
  }

  ngOnInit() { }

  ngOnDestroy(): void {
  }

  ngAfterViewInit() {
    this.articleService.textAreaArray.push(this);
    this.textAreaRef.nativeElement.focus();
    fromEvent(this.textAreaRef.nativeElement, 'keydown')
      .pipe(
        map((e: any) => e),
      ).subscribe(e => {
        if (e.key === 'Backspace' && this.textAreaRef.nativeElement.value.length === 0) {
          this.destroyTextArea.emit(true);
        } else if (e.shiftKey && e.key === 'Enter') {
          e.preventDefault();
          const ref = this.createTextAreaComponent(this.id);
          ref.instance.destroyTextArea.subscribe(data => {
            if (data) {
              this.articleService.removeTextAreaComponent(this.id);
              ref.destroy();
            }
          });
        }
      });

    fromEvent(this.textAreaRef.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e),
        distinctUntilChanged()
      ).subscribe(e => {
        if (this.textAreaRef.nativeElement.value.trim() !== '') {
          this.renderer.setStyle(this.buttonAreaRef.nativeElement, 'visibility', 'hidden');
        } else if (this.textAreaRef.nativeElement.value.trim() === '') {
          this.renderer.setStyle(this.buttonAreaRef.nativeElement, 'visibility', 'visible');
        }
      });
  }

  focusFunction(): void {
    if (this.textAreaRef.nativeElement.value.trim() === '') {
      this.isFocused = true;
      this.renderer.setStyle(this.buttonAreaRef.nativeElement, 'visibility', 'visible');
      this.renderer.setStyle(this.divSelectOptions.nativeElement, 'visibility', 'hidden');
    }
  }

  focusOutFunction(): void {
    if (this.textAreaRef.nativeElement.value.trim() === '') {
      this.isFocused = false;
      this.renderer.setStyle(this.buttonAreaRef.nativeElement, 'visibility', 'hidden');
    }
    this.renderer.setStyle(this.divSelectOptions.nativeElement, 'visibility', 'hidden');
  }

  @HostListener('document:click', ['$event'])
  onClickOutside($event) {
    const clickedInside = this.buttonAreaRef.nativeElement.contains($event.target);
    if (clickedInside) {
      this.renderer.setStyle(this.buttonAreaRef.nativeElement, 'visibility', 'visible');
      this.renderer.setStyle(this.divSelectOptions.nativeElement, 'visibility', 'visible');
    } else if (!clickedInside && !this.isFocused) {
      this.renderer.setStyle(this.divSelectOptions.nativeElement, 'visibility', 'hidden');
      this.renderer.setStyle(this.buttonAreaRef.nativeElement, 'visibility', 'hidden');
    }
  }

  createFigureComponent(): void {

  }
}
