import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';


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

  constructor(private http: Http, private cepService: ConsultaCepService) { }

  ngOnInit() {
  }

  onSubmit(formulario){
    this.http.post('http://httpbin.org/post',JSON.stringify(formulario.value))
    .map(res => res)
    .subscribe(dados => {
      console.log(dados);
      formulario.form.reset();  
    });
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

  consultaCEP(cep, form){
    this.cepService.consultaCEP(cep, this.resetaDadosForm, form)
    .subscribe(
      dados => this.populaDadosForm(dados, form)
    );
   
  }

  populaDadosForm(dados, formulario){
    /*formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });*/

    formulario.form.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm(formulario){
    formulario.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}
