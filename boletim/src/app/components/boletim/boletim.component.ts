import { Component, OnInit } from '@angular/core';
import { EstudanteService } from '../../services/estudante.service';
import { Estudante } from '../../../../Estudante';
import { NotaService } from '../../services/nota.service';

@Component({
  moduleId: module.id,
  selector: 'boletim',
  templateUrl: './boletim.component.html',
  styleUrls: ['./boletim.component.css']
})
export class BoletimComponent implements OnInit {
    estudantes:any [];
    name: string;

  constructor(private estudanteService: EstudanteService, private notaService: NotaService) {
      this.estudanteService.getEstudantes().subscribe(estudantes => {
          this.estudantes = estudantes;
      });

      // adicionar notas ao respectivo estudante
      for(var i=0;i<this.estudantes.length;i++){
          var notas = [];
          this.notaService.getNotasEstudante(this.estudantes[i]._id).subscribe(_notas => {
              notas = _notas;
          })
          this.estudantes[i].notas = notas;
      }
  }

  ngOnInit() {

  }

  addEstudante(event:any){
      event.preventDefault();
      var novoEstudante = {
          name: this.name
      }

      this.estudanteService.addEstudante(novoEstudante).subscribe( estudante => {
          this.estudantes.push(estudante);
          this.name = '';
      })
  }

  deleteEstudante(id:any){
      var estudantes = this.estudantes;

      this.estudanteService.deleteEstudante(id).subscribe(data => {
          if (data.n == 1){
              for(var i=0;i<estudantes.length;i++){
                  if(estudantes[i]._id == id){
                      estudantes.splice(i,1);
                  }
              }
          }
      });
  }

}
