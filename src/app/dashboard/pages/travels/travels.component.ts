import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TravelsData } from '../../models/travels-structure';
import { TravelsStatusService } from '../../services/travels-status.service';


@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit{

  cards:TravelsData[]=[];

  constructor(private travelStatusService:TravelsStatusService){}
  

  ngOnInit(){
    this.travelStatusService.travelsGet().subscribe(resp =>{
      console.log(resp);
      this.cards=resp;
    });
  }
}
