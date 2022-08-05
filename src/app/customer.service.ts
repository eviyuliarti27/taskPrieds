import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( private http: HttpClient,) {

   }

   getCustomer(page: number, sort: string): Observable<any> {
    const url = 'http://localhost:3000/api/getAll';
    return this.http.get(url + '?page=' + page + '?sort=' + sort);
  }

  addCustomer(params: any): Observable<any> {
    const url = 'http://localhost:3000/api/post';
    return this.http.post(url, params);
  }
}
