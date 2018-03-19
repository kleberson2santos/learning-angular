import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elves',
  templateUrl: './operador-elves.component.html',
  styleUrls: ['./operador-elves.component.scss']
})
export class OperadorElvesComponent implements OnInit {

  tarefa: any = {
    desc: 'Descricao da tarefa',
    responsavel: null
  }

  constructor() { }

  ngOnInit() {
  }

}
