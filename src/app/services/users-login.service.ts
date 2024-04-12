import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersLoginService {
  readonly APIUrl = "http://localhost:8000/api/";
  constructor(private http: HttpClient) {
   }

  getAll(){
    return this.http.get(`${this.APIUrl}users`);
  } 
  postUsers(user:any){
    return this.http.post(`${this.APIUrl}users`,user); 
  }
}
