import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';

import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: Aluno;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
  ) { }

  ngOnInit() {
    /* this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);
      }
    );*/

    console.log('ngOnInit: AlunoDetalheComponent');

    this.inscricao = this.route.data.subscribe(
      (info: {aluno: Aluno}) => {
        console.log('Recebendo o obj Aluno do resolver');
        this.aluno = info.aluno;
      }
    );
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
