import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ParentComponent, ChildComponent],
  exports: [ParentComponent]
})
export class MeuInputOutputModule { }
