import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@NgModule({
  imports: [
    HttpClientModule // Agrega HttpClientModule a la lista de imports
  ],
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api'; 

  constructor(private http: HttpClient) { }

  login(login:any): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`, login );
  }
}
