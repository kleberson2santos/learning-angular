import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]' //aplicado apenas na tag <p>
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer) { 
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow'; //nao recomendado
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color','yellow')
  }

}
