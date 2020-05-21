import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { CreateProfileModalComponent } from '../create-profile-modal/create-profile-modal.component';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  openDialog(): void {
    this.dialog.open(CreateProfileModalComponent, { disableClose: true })
    
  }
 
  ngOnInit() {
    this.openDialog();
  }

}
