import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  readonly APIUrl = "http://localhost:8000/api/";
  constructor(private http: HttpClient) {
   }
   login(login:any): Observable<any> {
    return this.http.get(`${this.APIUrl}users`, login );
  }
}
