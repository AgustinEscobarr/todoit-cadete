import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TravelsData } from '../../models/travels-structure';
export interface DataTravel{
  id:number,
  status? :number,
}

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

  @Input() cards:TravelsData[]=[];
  @Output() onChangeStatus: EventEmitter<DataTravel>=new EventEmitter;
  constructor() { }

  cardsEnvio():TravelsData[]{

    return this.cards

  }
  
  ngOnInit(): void {
  }
  requestTrip(id:number,status:number){
    console.log(id);
    let object:DataTravel = {
      id:id,
      status :status,
    }
    this.onChangeStatus.emit(object);
  }

}
