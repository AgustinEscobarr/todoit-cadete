import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChangeOptions } from '../../models/change-options';

@Component({
  selector: 'app-buttons-card',
  templateUrl: './buttons-card.component.html',
  styleUrls: ['./buttons-card.component.scss']
})
export class ButtonsCardComponent implements OnInit {

  @Input()travelId :number=0
  @Input()status :number = 0;
  @Output() onButtonEvent:EventEmitter<ChangeOptions>=new EventEmitter
  cadeteId :number=JSON.parse(localStorage.getItem('userLoged')||'').id
  constructor() { }

  sendClick(changeOptions:ChangeOptions){
    console.log('buttons');
    console.log(changeOptions);
    this.onButtonEvent.emit(changeOptions)
  }
  ngOnInit(): void {
  }

}
