import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EstudanteService {
    estudante: any;

  constructor(private http: Http) {
      console.log('Estudante service initialized...');
  }

  getEstudantes(){
      return this.http.get('http://localhost:3000/api/estudantes')
        .map(res => res.json());
  }

  addEstudante(novoEstudante:any){
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.post('http://localhost:3000/api/estudante',JSON.stringify(novoEstudante),{headers: headers})
        .map(res => res.json());
  }

  deleteEstudante(id:any){
      return this.http.delete('http://localhost:3000/api/estudante/'+id).map(res => res.json());
  }

}
