import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TravelsData } from '../../models/travels-structure';
import { ChangeOptions } from '../../models/change-options';
import { MatDialog } from '@angular/material/dialog';
import { CardExpansionComponent } from '../dialogs/card-expansion/card-expansion.component';
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

  @Input()enableButtons:boolean=true;

  @Input() cards:TravelsData[]=[];
  @Output() onChangeStatus: EventEmitter<ChangeOptions>=new EventEmitter;
  constructor(public dialog: MatDialog) {}

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
  openDialog(card: TravelsData):void{
    const dialogRef = this.dialog.open(CardExpansionComponent, {data:card});

  }
  pressCard(card:TravelsData):void{

    window.open(`https://www.google.com/maps/place/${card.travelEquipmentDTOs[card.travelEquipmentDTOs.length-1].equipment.cliente.address.replace(' ','+')}`, '_blank');
  }

}
