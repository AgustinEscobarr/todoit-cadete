import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TravelsData } from '../../models/travels-structure';
import { ChangeOptions } from '../../models/change-options';
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
  @Output() onChangeStatus: EventEmitter<ChangeOptions>=new EventEmitter;
  constructor() { }

  cardsEnvio():TravelsData[]{

    return this.cards

  }
  
  ngOnInit(): void {
  }
  requestTrip(changeOptions:ChangeOptions){
    console.log(changeOptions.travelId);
    console.log('emito el evento al padre')
    this.onChangeStatus.emit(changeOptions);
  }
  pressCard(card:TravelsData){
    alert(card.travelEquipmentDTOs[card.travelEquipmentDTOs.length-1].operationDate.slice(0,-17))
  }

}
