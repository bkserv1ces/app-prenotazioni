import { Injectable } from '@angular/core';
import { AppUsers } from '../modelli/user';
import { UUID } from 'angular2-uuid';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users : AppUsers[] = [];
  UserLoggato : AppUsers | undefined;

  constructor() { 
    this.users.push({id : UUID.UUID(), username : "user1", password : "user", ruolo :["USER"]});
    this.users.push({id : UUID.UUID(), username : "user2", password : "user", ruolo :["USER"]});
    this.users.push({id : UUID.UUID(), username : "admin", password : "admin", ruolo :["USER", "ADMIN"]});
  }

  public login(username :string, password :string): Observable<AppUsers>{
    let appUser = this.users.find(u => u.username==username);

    if(!appUser) return throwError(()=>new Error("User non trovato"));

    if(appUser.password!=password) {
      return throwError(()=>new Error("Password errata!"));
    }

    return of(appUser);
  }

  public authenticateUser(appUser : AppUsers): Observable<boolean>{
    this.UserLoggato = appUser;
    localStorage.setItem("logUser", JSON.stringify({
      username:appUser.username, ruolo:appUser.ruolo, jwt:"JWT_TOKEN"}));
    return of(true);
  }  

  public haRuolo(ruolo : string) : boolean{
    return this.UserLoggato!.ruolo.includes(ruolo);
  }

  public isLoggato(){
    return this.UserLoggato != undefined;
  }

  public logout(): Observable<boolean>{
    this.UserLoggato = undefined;
    localStorage.removeItem("logUser");

    return of(true);
  }
}
