import {
  Injectable,
  ViewContainerRef,
  ComponentRef,
} from '@angular/core';
import { TextAreaComponent } from './textarea/textarea.component';

@Injectable({
  providedIn: 'root'
})
export class CreateArticleService {

  bodySectionRef: ViewContainerRef;
  textAreaArray: Array<TextAreaComponent> = [];

  constructor() { }

  changePosition(id: number) {
    this.textAreaArray.forEach((component) => {
      if (component.id >= id) {
        component.id = component.id + 1;
      }
    });
  }

  removeTextAreaComponent(ref: ComponentRef<any>) {
    const id = ref.instance.id;
    this.textAreaArray.forEach((component, index) => {
      if (component.id === id) {
        this.textAreaArray.splice(index, 1);
      }
    });
    ref.destroy();
    this.textAreaArray.forEach((component) => {
      if (component.id > id) {
        component.id = component.id - 1;
      }
    });
  }
}
