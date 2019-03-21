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
export class AuthService {

constructor(private http: HttpClient) {
  //this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
  //this.currentUser = this.currentUserSubject.asObservable();
}

 login(email: string, password: string): Observable<boolean> {
   console.log(email)
   return this.http.post<{token: string}>(endpoint + 'auth/login', {email: email, password: password})
     .pipe(
       map(result => {
         console.log(result)
         if(result !== null){
           localStorage.setItem('user', JSON.stringify(result));
           return true;
         }else{
           return false;
         }
       })
     );
 }

 register(name:string, email: string, password: string): Observable<boolean> {
   console.log(email)
   return this.http.post<{token: string}>(endpoint + 'auth/register', {name:name, email: email, password: password})
     .pipe(
       map(result => {
         console.log(result)
         if(result !== null){
           localStorage.setItem('user', JSON.stringify({id:result, name:name, email: email, password: password}));
           return true;
         }else{
           return false;
         }
       })
     );
 }

 logout() {
   localStorage.removeItem('user');
 }

 public get loggedIn(): boolean {
   return (localStorage.getItem('user') !== null);
 }
}
