import { Component, OnInit } from '@angular/core';
import { EstudanteService } from '../../services/estudante.service';
import { Estudante } from '../../../../Estudante';

@Component({
  selector: 'boletim',
  templateUrl: './boletim.component.html',
  styleUrls: ['./boletim.component.css']
})
export class BoletimComponent implements OnInit {
    estudantes: Estudante[];

  constructor(private estudanteService: EstudanteService) {

  }

  ngOnInit() {
      this.estudanteService.getEstudantes().subscribe(estudantes => {
          this.estudantes = estudantes;
      })
  }

}
