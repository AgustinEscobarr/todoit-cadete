import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent implements OnInit {

  expanded: boolean =false
  name:string=JSON.parse(localStorage.getItem('userLoged')||'').fullName
  constructor() { }

  ngOnInit(): void {
  }
  closePanel(){
    this.expanded=false;
  }

}
