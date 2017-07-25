import { Component, ElementRef, Renderer, Optional } from '@angular/core';
import { Platform, Content, Img, DomController } from 'ionic-angular';

/**
 * Generated class for the VirtualIonImgComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'virtual-ion-img',
  template: '<img>'
})
export class VirtualIonImgComponent extends Img {
  constructor(private __elementRef: ElementRef,
              __renderer: Renderer,
              __plt: Platform,
              @Optional() private __content: Content,
              __dom: DomController) {
    super(__elementRef, __renderer, __plt, __content, __dom);
  }

  get top(){
    this._rect = (<HTMLElement>this.__elementRef.nativeElement).getBoundingClientRect();
    return this._rect.top + this.__content.scrollTop - this.__content._cTop;
  }
  get bottom(){
    this._rect = (<HTMLElement>this.__elementRef.nativeElement).getBoundingClientRect();
    return this._rect.bottom + this.__content.scrollTop - this.__content._cTop;
  }
}
