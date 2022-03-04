import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { SettingsData } from 'src/assets/data/table-data';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private apiService : ApiService) { }

  getSettingsData(): Observable<SettingsData[]>{
    return this.apiService.getSetting();
  }
}
