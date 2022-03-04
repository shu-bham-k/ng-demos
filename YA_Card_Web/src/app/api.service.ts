import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GroupsData, GroupsMember, SettingsData } from 'src/assets/data/table-data';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  signIn(email: string, password: string): Observable<any> {

    var data = { "Email": email, "Password": password };
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.http.post<any>(`${environment.baseURL}` + "api/admin/adminaccount/Login/", data);
  }

  forgotPassword(email: string): Observable<any> {

    var data = { "Email": email };

    return this.http.post<any>(`${environment.baseURL}` + "api/admin/adminaccount/ForgotPassword/", data);
  }


  resetPassword(token: string, userId: any, password: string, confirmPassword: string) {
    return this.http.post(`${environment.baseURL}` + "api/admin/adminaccount/ResetPassword/", { token, userId, password, confirmPassword });
  }

  
  members(startDate:string,endDate:string) :Observable<any>
  {
    let data = { "StartDate" : startDate, "EndDate" : endDate };
    return this.http.post<any>(`${environment.baseURL}`+"api/admin/Dashboard/GetTotalMembersCount",data);
  }

  groups(startDate:string,endDate:string) :Observable<any>
  {
    let data = { "StartDate" : startDate, "EndDate" : endDate };
    return this.http.post<any>(`${environment.baseURL}`+"api/admin/Dashboard/GetTotalGroupsCount",data);
  }

  subGroups(startDate:string,endDate:string) :Observable<any>
  {
    let data = { "StartDate" : startDate, "EndDate" : endDate };
    return this.http.post<any>(`${environment.baseURL}`+"api/admin/Dashboard/GetTotalSubGroupsCount",data);
  }

  polls(startDate:string,endDate:string) :Observable<any>
  {
    let data = { "StartDate" : startDate, "EndDate" : endDate };
    return this.http.post<any>(`${environment.baseURL}`+"api/admin/Dashboard/GetTotalPollsCount",data);
  }

  blogs(startDate:string,endDate:string) :Observable<any>
  {
    let data = { "StartDate" : startDate, "EndDate" : endDate };
    return this.http.post<any>(`${environment.baseURL}`+"api/admin/Dashboard/GetTotalBlogsCount",data);
  }

  events(startDate:string,endDate:string) :Observable<any>
  {
    let data = { "StartDate" : startDate, "EndDate" : endDate };
    return this.http.post<any>(`${environment.baseURL}`+"api/admin/Dashboard/GetTotalEventsCount",data);
  }

  userList(startDate:string,endDate:string) :Observable<any>
  {
    let data = { "StartDate" : startDate, "EndDate" : endDate };
    return this.http.post<any>(`${environment.baseURL}`+"api/admin/Dashboard/GetUserList",data);
  }

  

  getEmployees(): Observable<GroupsData[]>{
    return this.http.get<GroupsData[]>("/assets/data/users.json");
  }

  getSetting():Observable<SettingsData[]>{
    return this.http.get<SettingsData[]>("/assets/data/settings.json")
  }

  getMembers():Observable<GroupsMember[]>{
    return this.http.get<GroupsMember[]>("/assets/data/members.json")
  }

}
