import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TravelsData } from '../../models/travels-structure';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

  @Input()cardsCurse:TravelsData[]=[];
  @Input() selected:boolean=true;
  @Input() cards:TravelsData[]=[];
  @Output() onChangeStatus: EventEmitter<number>=new EventEmitter;
  constructor() { }

  cardsEnvio():TravelsData[]{

    return this.cards

  }
  cardsCurseEnvio(){
    return this.cardsCurse;
  }
  ngOnInit(): void {
  }
  requestTrip(id:number){
    console.log(id);
    this.onChangeStatus.emit(id);
  }

}
