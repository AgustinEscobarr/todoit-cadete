import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TravelsData } from '../../../models/travels-structure';

@Component({
  selector: 'app-card-expansion',
  templateUrl: './card-expansion.component.html',
  styleUrls: ['./card-expansion.component.scss']
})
export class CardExpansionComponent  {

  constructor( @Inject(MAT_DIALOG_DATA) public card: TravelsData) {}
  

  openMaps(card :TravelsData): void {
    window.open(`https://www.google.com/maps/place/${card.travelEquipmentDTOs[card.travelEquipmentDTOs.length-1].equipment.cliente.address.replace(' ','+')}`, '_blank');
  }

}
