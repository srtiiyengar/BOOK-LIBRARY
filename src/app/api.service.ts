import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getBooks():Observable<any>{
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=rich:keyes&key=AIzaSyBiuwh9z3CfN86AG2af8ibOdHxj86OBq2g')
  }
}
