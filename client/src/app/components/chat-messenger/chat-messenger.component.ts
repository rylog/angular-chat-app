import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Message } from 'src/app/shared/models/message';

@Component({
  selector: 'chat-messenger',
  templateUrl: './chat-messenger.component.html',
  styleUrls: ['./chat-messenger.component.scss']
})
export class ChatMessengerComponent {
  messageInput: string;

  messages: Message[];
  senderId = 'senderId';
  constructor(private chatService: ChatService) {
    this.messages = [];
    this.chatService.messages.subscribe(msg => {
      this.messages.push(msg);
      console.log(this.messages);
    })
  }
  sendMessage() {
    if (this.messageInput) {
      this.chatService.sendMsg(this.senderId, this.messageInput);
    }
    this.messageInput = null;
  }

}
