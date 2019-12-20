import { ComponentRef } from "@angular/core";

export class TextAreaClass {
  index: Number;
  ref: ComponentRef<any>;

  constructor(index: Number, ref: ComponentRef<any>) {
    this.index = index;
    this.ref = ref;
  }

  getIndex(): Number {
    return this.index;
  }
  getRef(): ComponentRef<any> {
    return this.ref;
  }
}
