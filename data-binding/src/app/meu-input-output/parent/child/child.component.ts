import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  template: `
        <h2>Child</h2>
        <p>Valor inserido no componente pai: {{parentValue}}<p>
        <input type="text" #childInput (keyup)="onChange(childInput.value)">
  `,
  inputs: ['parentValue'],
  outputs: ['childChanged']
})
export class ChildComponent {

  parentValue: string;
  //Child return
  childChanged = new EventEmitter<string>(); 

  onChange(value: string){
      this.childChanged.emit(value);
  }

}
