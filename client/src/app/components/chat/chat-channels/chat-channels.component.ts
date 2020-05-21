import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-channels',
  templateUrl: './chat-channels.component.html',
  styleUrls: ['./chat-channels.component.scss']
})
export class ChatChannelsComponent {
  channels:string[];

  constructor() { }

  addChannel(channel:string){
    this.channels.push(channel);
  }

}
