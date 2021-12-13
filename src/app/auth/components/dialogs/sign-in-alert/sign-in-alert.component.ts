import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertMessage } from 'src/app/dashboard/models/menssage-dialog';

@Component({
  selector: 'app-sign-in-alert',
  templateUrl: './sign-in-alert.component.html',
  styleUrls: ['./sign-in-alert.component.scss']
})
export class SignInAlertComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public alert :AlertMessage ) {}

  

  ngOnInit(): void {
  }

}
