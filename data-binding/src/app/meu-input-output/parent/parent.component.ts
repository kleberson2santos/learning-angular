import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent-example',
  template: `
  <div class="content">
  <h1>Parent</h1>
  <p>Valor inserido no componente filho: {{childValue}}</p>
  <input type="text" #parentInput (keyup)="0"><br>
  
  <div class="content">
   <child [parentValue]="parentInput.value" (childChanged)="childValue = $event"></child>
   </div>
  </div>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

    childValue: string;

  constructor() { }

  ngOnInit() {
  }

}
