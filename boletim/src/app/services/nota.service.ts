import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NotaService {
    nota: any;

  constructor(private http: Http) { }

  getNotasEstudante(id){
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.get('/api/notas/'+id,{headers: headers})
        .map(res => res.json());
  }

}
