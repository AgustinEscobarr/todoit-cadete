import { Component, OnInit } from '@angular/core';
import { TravelsStatusService } from '../../services/travels-status.service';
import { TravelsData } from '../../models/travels-structure';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  arrayHistory:TravelsData[]=[];
  cardHistory:TravelsData[]=[];
  constructor(private travelStatusService :TravelsStatusService) { }

  ngOnInit(): void {
    this.receiveDataRecord();
  }
  receiveDataRecord(){
    let cuatro = this.travelStatusService.travelsGet(4);
    let cinco = this.travelStatusService.travelsGet(5);
    let seis = this.travelStatusService.travelsGet(6);
    let siete = this.travelStatusService.travelsGet(7);
    let ocho = this.travelStatusService.travelsGet(8);
    let nueve = this.travelStatusService.travelsGet(9);
    forkJoin([cuatro,cinco,seis,siete,ocho,nueve]).subscribe(
      resp=>{
        console.log([...resp[0],...resp[1],...resp[2],...resp[3],...resp[4],...resp[5]]);
        this.arrayHistory=[...resp[0],...resp[1],...resp[2],...resp[3],...resp[4],...resp[5]];
        this.arrayHistory.forEach(element=>{
          element.travelEquipmentDTOs.forEach(item=>{
            if((item.statusTravel==4 || item.statusTravel==8)&&item.cadete.id==JSON.parse(localStorage.getItem('userLoged')||'').id){
              this.cardHistory.push(element);

            }
          });
          this.cardHistory.sort((a,b)=>{
            return (Date.parse(a.travelEquipmentDTOs[a.travelEquipmentDTOs.length- 1].operationDate)- Date.parse(b.travelEquipmentDTOs[b.travelEquipmentDTOs.length- 1].operationDate));
            
          });
        })
        
        
        
      });
     
   }

}
