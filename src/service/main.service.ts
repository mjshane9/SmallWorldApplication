import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'environment';

@Injectable({
  providedIn: 'root',
})
export class MainService {

  constructor(private http:HttpClient) { }

  getUserList(page:any,per_page:any){
    return this.http.get(`${environment.apiUrl}/users?page=${page+1}&per_page=${per_page}`);
  }

  getUserDetail(id:any){
    return this.http.get(`${environment.apiUrl}/users/${id}`);
  }

}