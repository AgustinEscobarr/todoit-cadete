import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/user-login';
import { UserComplete } from '../models/user-structure';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

 /* register(client:UserLogin):  Observable<UserLogin>  {
     let headers = new HttpHeaders({'Content-Type':'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200/'});
 
    return  this.http.post<UserLogin>('/api/Users?userOperation=1', client);
  }*/
  login(client:UserLogin): Observable<UserComplete> {
    return this.http.get<UserComplete>(`/api/Login?email=${client.email}&password=${client.password}`)
  }
}
