import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MeuFormModule } from './meu-form/meu-form.module';
import { MeuInputOutputModule } from './meu-input-output/meu-input-output.module';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';



@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertyComponent
  ],
  imports: [
    BrowserModule,
    MeuFormModule,
    MeuInputOutputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
