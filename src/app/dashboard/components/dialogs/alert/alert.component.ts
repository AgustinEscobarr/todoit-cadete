import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { AlertMessage } from 'src/app/dashboard/models/menssage-dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public alert :AlertMessage ) {}

  ngOnInit(): void {
  }

}
