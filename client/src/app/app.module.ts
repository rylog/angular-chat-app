import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatMessengerComponent } from './components/chat-messenger/chat-messenger.component';
import { ChatService } from './services/chat/chat.service';
import { WebsocketService } from './services/websocket/websocket.service';
import { SharedModule } from './shared/shared.module';
import { ChatChannelsComponent } from './components/chat-channels/chat-channels.component';
import { IconBarComponent } from './components/icon-bar/icon-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatMessengerComponent,
    ChatChannelsComponent,
    IconBarComponent,
  ],
  imports: [
    SharedModule,
  ],
  providers: [ChatService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
