import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

import { TravelsData } from '../../models/travels-structure';
import { TravelsStatusService } from '../../services/travels-status.service';
import { forkJoin} from 'rxjs';
import { ChangeStatusService } from '../../services/change-status.service';
import { ChangeOptions } from '../../models/change-options';
import { EquipmentStatusService } from '../../services/equipment-status.service';

import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../../components/dialogs/alert/alert.component';
import { AlertMessage } from '../../models/menssage-dialog';


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

  constructor(private travelStatusService:TravelsStatusService, private changeStatusService: ChangeStatusService, private equipmentStatusService :EquipmentStatusService, public dialog: MatDialog){}
  ngOnInit(){
    this.receiveData(); 

    this.receiveCurseData();
    
    
  }

  // CONSULTO EL EQUIPAMIENTO, QUE TIENE EL MISMO ID QUE EL VIAJE, PARA SABER SI YA LO TOMARON O NO.
  requestTripValidate(changeOptions:ChangeOptions){
    console.log('entré')
    if(this.cardsCurse.length<=4){
  
    if((changeOptions.newStatusTravel===2 || changeOptions.newStatusTravel===6)){
      console.log('acá entré tambien')
      
      
      this.equipmentStatusService.equipmentGet(changeOptions.travelId).subscribe(resp=>{
        if(!resp.travelEquipmentDTOs[resp.travelEquipmentDTOs.length-1].cadete){
          this.changeStatusService.changeStatus(changeOptions).subscribe(resp=>{
            console.log(resp);
            console.log('Cadete es nulo, por eso entra')
            let alert :AlertMessage={
              validate:true,
              menssage:"El viaje ahora es tuyo!!!"
            }
            this.dialog.open(AlertComponent, {data:alert})
            this.receiveData();
           this.receiveCurseData();

     });

        }
        else if((resp.travelEquipmentDTOs[resp.travelEquipmentDTOs.length -1].statusTravel==1||resp.travelEquipmentDTOs[resp.travelEquipmentDTOs.length -1].statusTravel==5 ||( resp.travelEquipmentDTOs[resp.travelEquipmentDTOs.length -1 ].statusTravel==10) && !(resp.travelEquipmentDTOs[resp.travelEquipmentDTOs.length-1].cadete.id==changeOptions.cadeteId))){
          console.log('acá entra porque el producto tiene un status travel en 1 o 5, o porque está en 10 y no tiene mi id')
          this.changeStatusService.changeStatus(changeOptions).subscribe(resp=>{
            
            console.log(resp);
            let alert :AlertMessage={
              validate:true,
              menssage:"El viaje ahora es tuyo!!!"
            }
            this.dialog.open(AlertComponent, {data:alert})
            this.receiveData();
           this.receiveCurseData();

     });
    }
        
      
      if(resp.travelEquipmentDTOs[resp.travelEquipmentDTOs.length -1 ].statusTravel==10 && resp.travelEquipmentDTOs[resp.travelEquipmentDTOs.length-1].cadete.id==changeOptions.cadeteId){
        let alert :AlertMessage={
          validate:false,
          menssage:"Recientemente renunciaste a este viaje, no puedes tomarlo."
        }
        this.dialog.open(AlertComponent, {data:alert})
      }


    });
  }else if(changeOptions.isReasigned){
    console.log('estoy acá para renunciar')
    this.changeStatusService.changeStatus(changeOptions).subscribe(resp=>{
      let alert :AlertMessage={
        validate:true,
        menssage:"Renunciaste al viaje, recuerda que no podras volver a tomarlo hasta que otro lo rechaze."
      }
      this.dialog.open(AlertComponent, {data:alert})
    console.log(resp);
    this.receiveData();
    this.receiveCurseData();

    });
  }
  else if(changeOptions.newStatusTravel===3 || changeOptions.newStatusTravel===7){
    console.log('Ya tienes el equipo en tus manos!!!!')
    this.changeStatusService.changeStatus(changeOptions).subscribe(resp=>{
      let alert :AlertMessage={
        validate:true,
        menssage:"Ya tienes el Equipo!!!, llevalo con cuidado..."
      }
      this.dialog.open(AlertComponent, {data:alert})
    console.log(resp);
    this.receiveData();
    this.receiveCurseData();

    });
  }
  else if(changeOptions.newStatusTravel===4 || changeOptions.newStatusTravel===8){
    console.log('Entregaste el equipo al lugar correspondiente')
    this.changeStatusService.changeStatus(changeOptions).subscribe(resp=>{
      let alert :AlertMessage={
        validate:true,
        menssage:"Muy bien!!!, entregaste el equipo!"
      }
      this.dialog.open(AlertComponent, {data:alert})
    console.log(resp);
    this.receiveData();
    this.receiveCurseData();

    });
  }
  }else{
    console.log('no puedes tener mas de 4 viajes en curso')
    let alert :AlertMessage={
      validate:false,
      menssage:"No puedes aceptar mas de 4 viajes."
    }
    this.dialog.open(AlertComponent, {data:alert})
  }
}

  
  receiveData(){
   let uno = this.travelStatusService.travelsGet(1);
   let cinco = this.travelStatusService.travelsGet(5);
   
   forkJoin([uno,cinco]).subscribe(
     resp=>{
       console.log([...resp[0],...resp[1]]);
       this.cards=[...resp[0],...resp[1]];
       
       this.cards.sort((a,b)=>{
         return (Date.parse(a.travelEquipmentDTOs[a.travelEquipmentDTOs.length- 1].operationDate)- Date.parse(b.travelEquipmentDTOs[b.travelEquipmentDTOs.length- 1].operationDate));
         
       });
       
     }
     
   )
    
  }
  receiveCurseData(){
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
            
            return (item.travelEquipmentDTOs[item.travelEquipmentDTOs.length-1].cadete.id==JSON.parse(localStorage.getItem('userLoged')||'').id);
          }
          return false;
        })
        
        this.cardsCurse.sort((a,b)=>{
          return (Date.parse(a.travelEquipmentDTOs[a.travelEquipmentDTOs.length- 1].operationDate)- Date.parse(b.travelEquipmentDTOs[b.travelEquipmentDTOs.length- 1].operationDate));
          
        });
        
      });
     
   }
   
  
  
  
 
  
}
