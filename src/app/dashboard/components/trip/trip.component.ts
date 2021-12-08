import { Component, Input, OnInit } from '@angular/core';
import { TravelsData } from '../../models/travels-structure';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

  @Input() cards:TravelsData[]=[];
  //(@Output() onSendTravels: EventEmitter<TravelsData[]>=new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

}
