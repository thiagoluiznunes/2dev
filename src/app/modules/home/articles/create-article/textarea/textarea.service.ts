import { Injectable, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { TextAreaComponent } from './textarea.component';
import { CreateArticleService } from '../create-article.service';

@Injectable({
  providedIn: 'root'
})
export class TextAreaService {

  constructor(
    private resolver: ComponentFactoryResolver,
    private articleService: CreateArticleService,
  ) { }

  createComponent(container: ViewContainerRef, index: number) {
    let ref = null;
    const factory = this.resolver.resolveComponentFactory(TextAreaComponent);

    this.articleService.changePosition(index);
    ref = container.createComponent(factory, index);
    ref.instance.id = container.indexOf(ref.hostView);
    return ref;
  }

  destroyComponent(container: ComponentRef<any>) {
    container.destroy();
  }
}
