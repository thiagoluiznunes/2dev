import {
  Injectable,
  ViewContainerRef,
  ComponentRef,
  ComponentFactoryResolver,
  ComponentFactory,
} from '@angular/core';
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
    let factory: ComponentFactory<any>;
    let ref = null;
    factory = this.resolver.resolveComponentFactory(TextAreaComponent);
    this.articleService.changePosition(0);
    ref = container.createComponent(factory, index);
    ref.instance.id = container.indexOf(ref.hostView);
    return ref;
  }

  destroyComponent(container: ComponentRef<any>) {
    container.destroy();
  }
}
