import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [ //Components Diretivas e Pipes
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [], //GuardaDeRotas
  bootstrap: [AppComponent] //ComponentPrincipal
})
export class AppModule { }
