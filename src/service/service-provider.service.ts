import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {
  api: string = this.url();
  constructor(private http: HttpClient) {}
  private url(): string {
    return 'http://201.217.211.116/sesion.php';
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
      numid : user,
      password : pass
    };
    console.log(datos);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.api, datos, httpOptions);
  }


}