import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

import { TravelsData } from '../../models/travels-structure';
import { TravelsStatusService } from '../../services/travels-status.service';
import { forkJoin} from 'rxjs';


@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit{


  options:string[]=["Viajes Disponibles","Viajes en Curso"];
  cards:TravelsData[]=[];

  selected:string='';

  @Input()id: number=0;
  constructor(private travelStatusService:TravelsStatusService){}
  

  ngOnInit(){
    this.receiveData(1,(a:number,b:TravelsData[])=>{})
    
    
  }
  receiveData(id:number,callback:Function){
   let uno = this.travelStatusService.travelsGet(1);
   let cinco = this.travelStatusService.travelsGet(5);
   let diez = this.travelStatusService.travelsGet(10);
   forkJoin([uno,cinco,diez]).subscribe(
     resp=>{
       console.log([...resp[0],...resp[1],...resp[2]]);
       this.cards=[...resp[0],...resp[1],...resp[2]];
       
       this.cards.sort((a,b)=>{
         return (Date.parse(a.travelEquipmentDTOs[a.travelEquipmentDTOs.length- 1].operationDate)- Date.parse(b.travelEquipmentDTOs[b.travelEquipmentDTOs.length- 1].operationDate));
         
       });
       callback(id,this.cards);
     }
     
   )
    
  }
  requestTripValidate(id:number,cards:TravelsData[]):Function{
    let valid:boolean=false;
        for(let i=0;i<=cards.length -1; i++){
          if(cards[i].id==id){
            console.log("todavía disponible")
            valid=true;
            break;
          }
        } 
      return new Function('')
  }
  
}
