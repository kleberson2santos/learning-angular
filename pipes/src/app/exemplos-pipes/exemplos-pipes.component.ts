import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'LearningnJavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  livros: string[] = ['Angular 2', 'Java'];

  filtro: string;

  addCurso(valor){
    this.livros.push(valor);
    console.log(this.livros);
  }

  //funcao de callback
  obterCursos(){
    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter(
      v => {
              if(v.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){               
                return true;
              }
              return false;
      });
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  //sistemas reativos
  valorAsync2 = Observable.interval(2000)
                          .map(valor => 'Valor assíncrono 2');

  constructor() { }

  ngOnInit() {
  }


}
