import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EstudanteService {
    estudante: any;

  constructor(private http: Http) { }

  getEstudantes(){
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.get('http://localhost:3000/api/estudantes',{headers: headers})
        .map(res => res.json());
  }

}
