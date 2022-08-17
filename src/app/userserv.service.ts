import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
const baseUrl="http://localhost:8080/api/users";
@Injectable({
  providedIn: 'root'
})
export class UserservService {

  constructor(private http:HttpClient) { }
  public create(data:any){
    return this.http.post(baseUrl,data);
  }
  public getone(email:any){
    return this.http.get(`${baseUrl}/${email}`);
  }
}
