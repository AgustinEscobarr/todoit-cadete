import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangeOptions } from '../models/change-options';
import { TravelsData } from '../models/travels-structure';

@Injectable({
  providedIn: 'root'
})
export class ChangeStatusService {

  constructor(private http: HttpClient) { }

  changeStatus(changeOptions:ChangeOptions): Observable<TravelsData> {
    
    return this.http.post<TravelsData>(`/api/Travel?travelId=${changeOptions.travelId}&statusTravel=${changeOptions.newStatusTravel}&userOperation=${changeOptions.userOperation}&cadeteId=${changeOptions.cadeteId}&isReasigned=${changeOptions.isReasigned}`,changeOptions);
  }
}
