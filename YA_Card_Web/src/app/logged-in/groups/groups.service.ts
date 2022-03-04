import { ApiService } from 'src/app/api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupsData } from 'src/assets/data/table-data';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http: HttpClient,private apiService : ApiService) { }


  getUsers(): Observable<GroupsData[]>{
    return this.apiService.getEmployees();
  }
}
  

