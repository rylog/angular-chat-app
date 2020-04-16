import { Injectable } from '@angular/core';
import { WebsocketService } from '../websocket/websocket.service'
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  messages: Subject<any>;
  senderId:string;

  constructor(private wsService: WebsocketService) {
    this.messages = <Subject<any>>this.wsService.connect()
    .pipe(map((response: any): any => {
      return response;
    }))
  }

  sendMsg(msg:string){
    this.messages.next({senderId:this.senderId, content:msg});
  }
}
