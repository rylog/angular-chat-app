import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { CreateProfileModalComponent } from '../create-profile-modal/create-profile-modal.component';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(400, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(250, style({ opacity: 0 }))
      ])
    ])
  ],
  host: { '[@fadeInOut]': 'in' }
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
