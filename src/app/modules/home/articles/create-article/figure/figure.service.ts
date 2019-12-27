import { Injectable, ComponentFactoryResolver, ViewContainerRef, ComponentFactory, ComponentRef } from '@angular/core';
import { FigureComponent } from './figure.component';

@Injectable({
  providedIn: 'root'
})
export class FigureService {

  constructor(
    private resolver: ComponentFactoryResolver,
  ) { }

  createComponent(container: ViewContainerRef, index: number) {
    let factory: ComponentFactory<any>;
    factory = this.resolver.resolveComponentFactory(FigureComponent);
    const ref = container.createComponent(factory, index);
    ref.instance.id = container.indexOf(ref.hostView);
    return ref;
  }

  destroyComponent(container: ComponentRef<any>) {
    container.destroy();
  }
}
