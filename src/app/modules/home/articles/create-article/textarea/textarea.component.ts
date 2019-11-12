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
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextAreaComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() textAreaId: String;
  @Input() textAreaCss: String;
  @Input() textAreaPlaceHolder: String;
  @Input() textAreaRows: Number;

  @Output() destroyTextArea = new EventEmitter();

  @ViewChild('textAreaRef', { static: false }) textAreaRef: ElementRef;

  constructor(
    private viewContainerRef: ViewContainerRef,
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
      });
  }

  focusFunction(): void {
  }

  focusOutFunction(): void {
  }

}
