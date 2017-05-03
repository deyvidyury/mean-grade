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
    estudanteSelecionado: Estudante;
    novoNome: string;


  constructor(private estudanteService: EstudanteService, private notaService: NotaService) {
      var notas = [];
      this.estudanteService.getEstudantes().subscribe(estudantes => {
          this.estudantes = estudantes;

            // adicionar notas ao respectivo estudante
            for(var i=0;i<this.estudantes.length;i++){
                var estudante = this.estudantes[i];
                this.notaService.getNotasEstudante(this.estudantes[i]._id).subscribe(_notas => {
                     notas = _notas
                     estudante.notas = _notas;
                    //  console.log(estudante.notas);
                })
                // console.log(estudante);
                // this.estudantes[i] = estudante;
                // console.log(this.estudantes[i]);
            }
            // console.log(this.estudantes);
      });



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

  clique(estudante: any){
    this.estudanteSelecionado = estudante;
    this.novoNome = estudante.name;
  }

  salvarNome(){
     
     this.estudanteSelecionado.name = this.novoNome;
     this.estudanteService.atualizaEstudante(this.estudanteSelecionado).subscribe(estudante => {
       this.estudanteSelecionado = null;
       this.novoNome = null;
       this.estudanteService.getEstudantes().subscribe(estudantes => {
          this.estudantes = estudantes;
        });
     })

     
  }


}
