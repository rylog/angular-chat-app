import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'chat-messenger',
  templateUrl: './chat-messenger.component.html',
  styleUrls: ['./chat-messenger.component.scss']
})
export class ChatMessengerComponent {
  messageText: string;
  messages: Message[];

  constructor(private chatService: ChatService) {
    this.messages = [];
    this.chatService.messages.subscribe(msg => {
      this.messages.push(msg);
      console.log(this.messages);
    })
  }
  sendMessage() {
    let senderId = 'senderId';
    this.chatService.sendMsg(senderId, this.messageText);
  }

}
