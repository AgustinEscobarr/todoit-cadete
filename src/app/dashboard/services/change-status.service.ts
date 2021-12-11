import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangeOptions } from '../models/change-options';

@Injectable({
  providedIn: 'root'
})
export class ChangeStatusService {

  constructor(private http: HttpClient) { }

  changeStatus(changeOptions:ChangeOptions): Observable<ChangeOptions> {
    
    return this.http.post<ChangeOptions>(`/api/Travel?travelId=${changeOptions.travelId}&statusTravel=${changeOptions.newStatusTravel}&userOperation=${changeOptions.userOperation}&cadeteId=${changeOptions.cadeteId}&isReasigned=${changeOptions.isReasigned}`,changeOptions);
  }
}
