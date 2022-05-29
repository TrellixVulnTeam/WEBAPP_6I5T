import { Component, } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddingDialogComponent } from './adding-dialog/adding-dialog.component';

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(public dialog: MatDialog) {}

  openDialog() {
    
    const dialogRef = this.dialog.open(AddingDialogComponent, {
      width: '80%',
      height: '80%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
