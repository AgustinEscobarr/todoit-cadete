import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-card',
  templateUrl: './buttons-card.component.html',
  styleUrls: ['./buttons-card.component.scss']
})
export class ButtonsCardComponent implements OnInit {

  @Input()status :number = 0;
  @Output() onButtonEvent:EventEmitter<number>=new EventEmitter
  constructor() { }

  sendClick(){
    this.onButtonEvent.emit()
  }
  ngOnInit(): void {
  }

}
