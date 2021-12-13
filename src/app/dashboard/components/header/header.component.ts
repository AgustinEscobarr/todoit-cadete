import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent implements OnInit {

  expanded: boolean =false
  name:string=JSON.parse(localStorage.getItem('userLoged')||'').fullName
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  closePanel(){
    this.expanded=false;
  }
  cerrarSesion(){
    localStorage.clear();
    this.route.navigate(['auth']);
    
  }

}
