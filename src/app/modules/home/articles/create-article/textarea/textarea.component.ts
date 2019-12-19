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
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

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
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2,
  ) { }

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
    // if (this.textAreaRef.nativeElement.value.length === 0) {
    // }
  }

  focusOutFunction(): void {
  }

}
