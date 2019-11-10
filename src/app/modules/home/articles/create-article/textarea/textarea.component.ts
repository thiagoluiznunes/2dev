import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

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

  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy(): void {
  }
  ngAfterViewInit() {
  }
  focusFunction(): void {
  }

  focusOutFunction(): void {
  }
}
