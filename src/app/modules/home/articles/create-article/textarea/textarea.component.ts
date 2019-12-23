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
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { TextAreaService } from './textarea.service';

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
  @ViewChild('divSelectOptions', { static: false }) divSelectOptions: ElementRef;

  isFocused = false;

  constructor(
    private renderer: Renderer2,
    private service: TextAreaService,
    private resolver: ComponentFactoryResolver,
  ) { }

  createTextAreaComponent() {

    let factory: ComponentFactory<any>;
    factory = this.resolver.resolveComponentFactory(TextAreaComponent);
    const ref = this.service.bodySectionRef.createComponent(factory);
    ref.instance.id = this.service.bodySectionRef.indexOf(ref.hostView);

    return ref;
  }

  ngOnInit() { }

  ngOnDestroy(): void {
  }

  ngAfterViewInit() {
    this.textAreaRef.nativeElement.focus();
    fromEvent(this.textAreaRef.nativeElement, 'keydown')
      .pipe(
        map((e: any) => e),
      ).subscribe(e => {
        if (e.key === 'Backspace' && this.textAreaRef.nativeElement.value.length === 0) {
          this.destroyTextArea.emit(true);
        } else if (e.shiftKey && e.key === 'Enter') {
          e.preventDefault();
          const ref = this.createTextAreaComponent();
          ref.instance.destroyTextArea.subscribe(data => {
            if (data) {
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

  selectOptions(): void {
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
}
