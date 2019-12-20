import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  ViewContainerRef,
  Renderer2,
  ComponentFactory,
  ComponentFactoryResolver,
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

  constructor(
    private renderer: Renderer2,
    private service: TextAreaService,
    private resolver: ComponentFactoryResolver,
  ) { }

  createTextAreaComponent(index: number) {

    let factory: ComponentFactory<any>;
    factory = this.resolver.resolveComponentFactory(TextAreaComponent);
    return this.service.bodySectionRef.createComponent(factory, index);
  }

  ngOnInit() { }

  ngOnDestroy(): void {
  }

  ngAfterViewInit() {
    fromEvent(this.textAreaRef.nativeElement, 'keydown')
      .pipe(
        map((e: any) => e),
      ).subscribe(e => {
        if (e.key === 'Backspace' && this.textAreaRef.nativeElement.value.length === 0) {
          this.destroyTextArea.emit(true);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          console.log(this.textAreaRef.nativeElement);
          // const index = this.service.bodySectionRef.indexOf(this.textAreaRef.nativeElement.hostView);
          // console.log('Index: ', index);
          // const ref = this.createTextAreaComponent(index);
          // console.log(ref.indexOf);
          // console.log(ref.hostView.rootNodes[0].previousElementSibling)
          // console.log(ref.hostView)
          // ref.instance.destroyTextArea.subscribe(data => {
          //   if (data) {
          //     ref.destroy();
          //   }
          // });
        }
      })

    fromEvent(this.textAreaRef.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e),
        distinctUntilChanged()
      ).subscribe(e => {
        if (this.textAreaRef.nativeElement.value.trim() !== '') {
          this.renderer.setStyle(this.buttonAreaRef.nativeElement, 'visibility', 'hidden');
        } else if (this.textAreaRef.nativeElement.value.trim() == '') {
          this.renderer.setStyle(this.buttonAreaRef.nativeElement, 'visibility', 'visible');
        }
      });
  }

  focusFunction(): void {
    if (this.textAreaRef.nativeElement.value.trim() === '') {
      this.renderer.setStyle(this.buttonAreaRef.nativeElement, 'visibility', 'visible');
    }
  }

  focusOutFunction(): void {
    if (this.textAreaRef.nativeElement.value.trim() === '') {
      this.renderer.setStyle(this.buttonAreaRef.nativeElement, 'visibility', 'hidden');
    }
  }

}
