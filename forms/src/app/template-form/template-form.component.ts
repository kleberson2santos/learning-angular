import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form);
  }

  verificaValidTouched(campo){
    return !campo.valid && campo.touched;
  }
  aplicaCssErro(campo){
    return {
      'has-error':this.verificaValidTouched(campo),
      'has-feedback':this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep){
    cep = cep.replace(/\D/g, '');
    if(cep != ""){
      var validaCep = /^[0-9]{8}$/;
      if(validaCep.test(cep)){
        this.http.get(`//viacep.com.br/ws/${cep}/json`)
        .map(dados => dados.json())
        .subscribe(dados => console.log(dados));
      }
    }
   
  }

}
