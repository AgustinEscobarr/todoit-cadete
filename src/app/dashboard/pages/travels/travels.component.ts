import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

import { TravelsData } from '../../models/travels-structure';
import { TravelsStatusService } from '../../services/travels-status.service';
import { forkJoin} from 'rxjs';
import { ChangeStatusService } from '../../services/change-status.service';
import { ChangeOptions } from '../../models/change-options';
import { DataTravel } from '../../components/trip/trip.component';

interface options{
  value:boolean,
  viewValue:string
}



@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit{
  
  selected=true

  options:options[]=[
    {
      value:true,
      viewValue:'Viajes Disponibles'
    },
    {
      value:false,
      viewValue:'Viajes en Curso'
    }
  ];
  cards:TravelsData[]=[];
  cardsCurse:TravelsData[]=[];

  

  @Input()id: number=0;
  constructor(private travelStatusService:TravelsStatusService, private changeStatusService: ChangeStatusService){}
  

  ngOnInit(){
    this.receiveData({id:0},(a:number,b:TravelsData[])=>{});
    this.receiveCurseData(1,(a:number,b:TravelsData[])=>{});
    
    
  }
  receiveData(object:DataTravel,callback:Function){
   let uno = this.travelStatusService.travelsGet(1);
   let cinco = this.travelStatusService.travelsGet(5);
   
   forkJoin([uno,cinco]).subscribe(
     resp=>{
       console.log([...resp[0],...resp[1]]);
       this.cards=[...resp[0],...resp[1]];
       
       this.cards.sort((a,b)=>{
         return (Date.parse(a.travelEquipmentDTOs[a.travelEquipmentDTOs.length- 1].operationDate)- Date.parse(b.travelEquipmentDTOs[b.travelEquipmentDTOs.length- 1].operationDate));
         
       });
       callback(object,this.cards);
     }
     
   )
    
  }
  receiveCurseData(id:number,callback:Function){
    let dos = this.travelStatusService.travelsGet(2);
    let tres = this.travelStatusService.travelsGet(3);
    let seis = this.travelStatusService.travelsGet(6);
    let siete = this.travelStatusService.travelsGet(7);
    forkJoin([dos,tres,seis,siete]).subscribe(
      resp=>{
        console.log([...resp[0],...resp[1],...resp[2],...resp[3]]);
        this.cardsCurse=[...resp[0],...resp[1],...resp[2],...resp[3]];
        
        this.cards.sort((a,b)=>{
          return (Date.parse(a.travelEquipmentDTOs[a.travelEquipmentDTOs.length- 1].operationDate)- Date.parse(b.travelEquipmentDTOs[b.travelEquipmentDTOs.length- 1].operationDate));
          
        });
        callback(id,this.cardsCurse);
      }
      
    )
     
   }
  requestTripValidate(object:DataTravel,cards:TravelsData[]):Function{
    if(object.status==1||object.status==5){
      for(let i=0;i<=cards.length -1; i++){
        if(cards[i].id==object.id){
          console.log("todavía disponible")
          
          this.changeControl(object)
          
          break;
        }
      }

    }else{
      this.changeControl(object)
    }
    
        

      return new Function('')
  }
  changeControl(object:DataTravel){
    let cadeteId= JSON.parse(localStorage.getItem('userLoged')||'').id;
    (object.status==1?this.changeStatusGeneral(object.id,2,cadeteId):'');
    (object.status==5?this.changeStatusGeneral(object.id,6,cadeteId):'');
  }
  changeStatusGeneral(travelId:number,newStatusTravel:number,cadeteId:number){
   let changeOptions:ChangeOptions={
     travelId:travelId,
     isReasigned:false,
     newStatusTravel:newStatusTravel,
     cadeteId:cadeteId,
     userOperation:2,
     Observations:''

    }
    this.changeStatusService.changeStatus(changeOptions).subscribe(
      {
        next: (resp) =>
        {
          console.log('todo bien bro :)')
          console.log(resp);
        },
        error: (e) => {console.error(e)},
        complete: () => console.info('complete') 
    },
    
    )
    
  }
  changeStatusReasigned(){

  }
  
}
