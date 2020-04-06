import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service'
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  messages: Subject<any>

  constructor(private wsService: WebsocketService) {
    this.messages = <Subject<any>>this.wsService.connect()
    .pipe(map((response: any): any => {
      return response;
    }))
  }

  sendMsg(username:string, msg:string){
    this.messages.next({senderId:username, content:msg});
  }
}
