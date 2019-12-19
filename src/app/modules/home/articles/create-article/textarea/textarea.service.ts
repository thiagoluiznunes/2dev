import {
  Injectable,
  ViewContainerRef,
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextAreaService {

  bodySectionRef: ViewContainerRef;
  constructor(
  ) { }

}
