import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipmentData } from '../models/equipment-structure';

@Injectable({
  providedIn: 'root'
})
export class EquipmentStatusService {

  constructor(private http: HttpClient) { }

  equipmentGet(equipmentId:number): Observable<EquipmentData> {
   
    
    return this.http.get<EquipmentData>(`/api/Equipment/${equipmentId}`);
}
}
