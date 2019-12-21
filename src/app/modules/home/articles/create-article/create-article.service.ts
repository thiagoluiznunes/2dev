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

  createComponent(container: ViewContainerRef, index: number) {
    let factory: ComponentFactory<any>;
    factory = this.resolver.resolveComponentFactory(TextAreaComponent);
    const ref = container.createComponent(factory, index);
    ref.instance.id = container.indexOf(ref.hostView);
    return ref;
  }

  destroyComponent(container: ComponentRef<any>) {
    container.destroy();
  }
}
