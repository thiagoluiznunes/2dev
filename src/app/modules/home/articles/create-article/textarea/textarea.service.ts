import {
  Injectable,
  ViewContainerRef,
  ComponentRef,
} from '@angular/core';
import { TextAreaClass } from './textarea.class';

@Injectable({
  providedIn: 'root'
})
export class TextAreaService {

  currentIndex = -1;
  bodySectionRef: ViewContainerRef;
  textAreaComponents: Array<TextAreaClass> = [];

  constructor(
  ) { }
}
