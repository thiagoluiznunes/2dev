import { Injectable, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { FigureComponent } from './figure.component';
import { CreateArticleService } from '../create-article.service';

@Injectable({
  providedIn: 'root'
})
export class FigureService {

  constructor(
    private resolver: ComponentFactoryResolver,
    private articleService: CreateArticleService,
  ) { }

  createComponent(container: ViewContainerRef, index: number) {
    let ref = null;
    const factory = this.resolver.resolveComponentFactory(FigureComponent);

    this.articleService.changePosition(index);
    ref = container.createComponent(factory, index);
    ref.instance.id = container.indexOf(ref.hostView);
    return ref;
  }

  destroyComponent(container: ComponentRef<any>) {
    container.destroy();
  }
}
