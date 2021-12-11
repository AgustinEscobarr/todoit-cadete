import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

import { TravelsData } from '../../models/travels-structure';
import { TravelsStatusService } from '../../services/travels-status.service';
import { forkJoin} from 'rxjs';
import { ChangeStatusService } from '../../services/change-status.service';
import { ChangeOptions } from '../../models/change-options';
import { EquipmentStatusService } from '../../services/equipment-status.service';


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

  constructor(private travelStatusService:TravelsStatusService, private changeStatusService: ChangeStatusService, private equipmentStatusService :EquipmentStatusService){}
  ngOnInit(){
    this.receiveData({travelId:0,isReasigned:false, newStatusTravel:0,cadeteId:0, userOperation:0,Observations:''},(a:number,b:TravelsData[])=>{});

    this.receiveCurseData(1,(a:number,b:TravelsData[])=>{});
    
    
  }

  // CONSULTO EL EQUIPAMIENTO, QUE TIENE EL MISMO ID QUE EL VIAJE, PARA SABER SI YA LO TOMARON O NO.
  requestTripValidate(changeOptions:ChangeOptions){
   this.equipmentStatusService.equipmentGet(changeOptions.travelId).subscribe(resp=>{
     if(changeOptions.newStatusTravel==2||changeOptions.newStatusTravel==6){
     if(resp.travelEquipmentDTOs[resp.travelEquipmentDTOs.length -1].statusTravel==1||resp.travelEquipmentDTOs[resp.travelEquipmentDTOs.length -1].statusTravel==5){
       console.log('El viaje está disponible')
       this.changeStatusService.changeStatus(changeOptions).subscribe(resp=>{
         console.log(resp);
       })
     }
    }
   })

  }

  
  receiveData(changeOptions:ChangeOptions,callback:Function){
   let uno = this.travelStatusService.travelsGet(1);
   let cinco = this.travelStatusService.travelsGet(5);
   
   forkJoin([uno,cinco]).subscribe(
     resp=>{
       console.log([...resp[0],...resp[1]]);
       this.cards=[...resp[0],...resp[1]];
       
       this.cards.sort((a,b)=>{
         return (Date.parse(a.travelEquipmentDTOs[a.travelEquipmentDTOs.length- 1].operationDate)- Date.parse(b.travelEquipmentDTOs[b.travelEquipmentDTOs.length- 1].operationDate));
         
       });
       callback(changeOptions,this.cards);
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
        this.cardsCurse=this.cardsCurse.filter((item:TravelsData)=>{
          if(item.travelEquipmentDTOs[item.travelEquipmentDTOs.length-1].cadete){
            
            return item.travelEquipmentDTOs[item.travelEquipmentDTOs.length-1].cadete.id==JSON.parse(localStorage.getItem('userLoged')||'').id;
          }
          return false;
        })
        
        this.cardsCurse.sort((a,b)=>{
          return (Date.parse(a.travelEquipmentDTOs[a.travelEquipmentDTOs.length- 1].operationDate)- Date.parse(b.travelEquipmentDTOs[b.travelEquipmentDTOs.length- 1].operationDate));
          
        });
        callback(id,this.cardsCurse);
      });
     
   }
   
  
  
  
 
  
}
