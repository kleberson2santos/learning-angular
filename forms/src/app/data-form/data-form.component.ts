import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

import { DropdownService } from './../shared/services/dropdown.service';
import { EstadosBr } from './../shared/models/iestados-br.model';
import { ConsultaCepService } from './../shared/services/consulta-cep.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;
  estados: EstadosBr[];

  constructor(
    private formBuilder: FormBuilder,
    private http: Http,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService) { }

  ngOnInit() {
    this.dropdownService.getEstadosBr().subscribe(
      dados => {
        this.estados = dados;
        console.log(dados);
      });
    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),
      endereco: new FormGroup({
        cep: new FormControl(null)
      })   });*/
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],

      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })

    });

  }

  onSubmit() {
    console.log(this.formulario);

    if (this.formulario.valid) {
      this.http.post('http://httpbin.org/post', JSON.stringify(this.formulario.value))
        .map(res => res)
        .subscribe(dados => {
          console.log(dados);
          //resets form
          //this.formulario.reset();
          this.resetar();
        }, (error: any) => alert('erro'));
    } else {
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string) {

    return !this.formulario.get(campo).valid && (this.formulario.get(campo).touched || this.formulario.get(campo).touched);

  }

  verificaEmailInvalido() {
    let campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP() {
    let cep = this.formulario.get('endereco.cep').value;
    this.cepService.consultaCEP(cep, this.resetaDadosForm, this.formulario)
      .subscribe(dados => this.populaDadosForm(dados));

  }

  resetaDadosForm(formulario) {
    formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  populaDadosForm(dados) {
    this.formulario.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

    this.formulario.get('nome').setValue('Kleberson');
  }

}
