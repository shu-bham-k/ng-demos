import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  

  constructor(private http: HttpClient) { }

  signIn(email: string,password:string): Observable<any> {
    //var data= "email="+Email+"&password="+Password;
    var data= { "Email":email, "Password": password };
    var reqHeader = new HttpHeaders({'Content-Type':'application/json'})
    return this.http.post<any>(`${environment.baseURL}`+ "api/admin/adminaccount/Login/",data);
  }


}
