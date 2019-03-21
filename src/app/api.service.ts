import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:3000/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getTasks(): Observable<any> {
    return this.httpClient.get(endpoint + 'tasks').pipe(
      map(this.extractData));
  }

  newTask(data): Observable<any> {
    return this.httpClient.post(endpoint + 'tasks', data).pipe(
      map(this.extractData));
  }

  updateTask(id, data): Observable<any> {
    return this.httpClient.put(endpoint + 'tasks/'+id, data).pipe(
      map(this.extractData));
  }

  completeTask(id, data): Observable<any> {
    return this.httpClient.put(endpoint + 'tasks/'+id, data).pipe(
      map(this.extractData));
  }

  deleteTask(id): Observable<any> {
    return this.httpClient.delete(endpoint + 'tasks/'+id).pipe(
      map(this.extractData));
  }
}
