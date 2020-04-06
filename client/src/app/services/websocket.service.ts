import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket: SocketIOClient.Socket;
  constructor() { }

  connect():Subject<MessageEvent> {
    this.socket = io('http://localhost:3000');

    let observable = new Observable(observer =>{
      this.socket.on('message', (data)=>{
        console.log("Received a message from websocket server")
        observer.next(data);
      })
      return ()=>{
        this.socket.disconnect();
      }
    })

    let observer ={
      next: (data:Object)=>{
        console.log(data);
        this.socket.emit('message', data);
      },
    };
    return Subject.create(observer, observable);
  }
}
