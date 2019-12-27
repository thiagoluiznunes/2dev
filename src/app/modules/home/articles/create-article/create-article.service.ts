import {
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import { TextAreaClass } from './textarea/textarea.class';

@Injectable({
  providedIn: 'root'
})
export class CreateArticleService {

  bodySectionRef: ViewContainerRef;
  textAreaArray: Array<TextAreaClass>;

  constructor(
    // private resolver: ComponentFactoryResolver,
  ) { }

  // createComponent(container: ViewContainerRef, index: number) {
  //   let factory: ComponentFactory<any>;
  //   factory = this.resolver.resolveComponentFactory(TextAreaComponent);
  //   const ref = container.createComponent(factory, index);
  //   ref.instance.id = container.indexOf(ref.hostView);
  //   return ref;
  // }

  // destroyComponent(container: ComponentRef<any>) {
  //   container.destroy();
  // }
}
