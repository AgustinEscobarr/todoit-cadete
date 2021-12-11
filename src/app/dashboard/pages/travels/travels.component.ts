import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

import { TravelsData } from '../../models/travels-structure';
import { TravelsStatusService } from '../../services/travels-status.service';
import { forkJoin} from 'rxjs';
import { ChangeStatusService } from '../../services/change-status.service';
import { ChangeOptions } from '../../models/change-options';


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
    this.receiveData({travelId:0,isReasigned:false, newStatusTravel:0,cadeteId:0, userOperation:0,Observations:''},(a:number,b:TravelsData[])=>{});

    this.receiveCurseData(1,(a:number,b:TravelsData[])=>{});
    
    
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
            console.log(JSON.parse(localStorage.getItem('userLoged')||'').id);
            return item.travelEquipmentDTOs[item.travelEquipmentDTOs.length-1].cadete.id===JSON.parse(localStorage.getItem('userLoged')||'').id;
          }
          return false;
        })
        
        this.cardsCurse.sort((a,b)=>{
          return (Date.parse(a.travelEquipmentDTOs[a.travelEquipmentDTOs.length- 1].operationDate)- Date.parse(b.travelEquipmentDTOs[b.travelEquipmentDTOs.length- 1].operationDate));
          
        });
        callback(id,this.cardsCurse);
      });
     
   }
  requestTripValidate(changeOptions:ChangeOptions,cards:TravelsData[]):Function{
    if(changeOptions.newStatusTravel==2||changeOptions.newStatusTravel==6){
      for(let i=0;i<=cards.length -1; i++){
        if(cards[i].id==changeOptions.travelId){
          console.log("todavía disponible")
          
          this.changeStatusGeneral(changeOptions);
          
          break;
        }else{
          //Acá iría un mensaje de error, para decir que el viaje que se intenta tomar, ya lo tomó otra persona.
          console.log('No está disponible');
        }
      }

    }else{
      this.changeStatusGeneral(changeOptions);
    }
    
        

      return new Function('')
  }
  
  changeStatusGeneral(changeOptions:ChangeOptions){
   
    this.changeStatusService.changeStatus(changeOptions).subscribe(
      {
        next: (resp) =>
        {
          if(changeOptions.isReasigned){
            console.log('Viaje reasignado con exito')
          }else{
            console.log('todo bien bro :), ya cambié el estado')
          }
          
          console.log(resp);
        },
        error: (e) => {
          console.error(e);
          console.log('Error del servidor al intentar asignar nuevo estado al viaje')
        },
        complete: () => console.info('complete') 
    },
    
    )
    
  }
  
}
