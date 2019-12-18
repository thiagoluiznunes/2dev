import {
  Injectable,
  ComponentFactoryResolver,
  ComponentRef,
  ViewContainerRef,
  ComponentFactory,
} from '@angular/core';
import { TextAreaComponent } from './textarea/textarea.component';

@Injectable({
  providedIn: 'root'
})
export class CreateArticleService {

  constructor(
    private resolver: ComponentFactoryResolver,
  ) { }

  createComponent(container: ViewContainerRef, type: String) {
    let factory: ComponentFactory<any>;
    if (type === 'paragraph') {
      factory = this.resolver.resolveComponentFactory(TextAreaComponent);
    } else if (type === 'figure') {
      factory = null;
    }
    return container.createComponent(factory, 0);
  }

  destroyComponent(container: ComponentRef<any>) {
    container.destroy();
  }
}
