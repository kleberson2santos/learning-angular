import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent-example',
  template: `
  <div class="parent">
  <h1>Parent</h1>
  <p>Value enteres in child component: {{childValue}}</p>
  <input type="text" #parentInput (keyup)="0"><br>
  
  <div class="child">
    <child [parentValue]="parentInput.value" (childChanged)="childValue = $event"></child>
  </div>
  </div>
  `,
  styleUrls: ['./parent.component.css'],
  directives: [ChildComponent]
})
export class ParentComponent implements OnInit {

    childValue: string;

  constructor() { }

  ngOnInit() {
  }

}
