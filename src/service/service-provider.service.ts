import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceProviderService {
  api: string = this.url();
  constructor(private http: HttpClient) { }
  private url(): string {
    return 'https://www.testigosilencioso.com/webserv';
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  Loggin(user, pass): Observable<any> {
    const datos = {
      numid: user,
      password: pass
    };
    console.log(datos);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.api + '/sesion.php', datos, httpOptions);
  }

  Departamentos(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.api + '/departamentos.php', httpOptions);
  }
  Municipio(departamento): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(this.api + '/municipio.php?departamento=' + departamento, httpOptions);
  }
  poblado(municipio): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.api + '/departamentos.php', httpOptions);
  }
}