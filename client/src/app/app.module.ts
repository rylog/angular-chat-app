import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatService } from './services/chat/chat.service';
import { WebsocketService } from './services/websocket/websocket.service';
import { SharedModule } from './shared/shared.module';
import { ChatComponent } from './components/chat/chat.component';
import { ChatChannelsComponent } from './components/chat/chat-channels/chat-channels.component';
import { ChatMessengerComponent } from './components/chat/chat-messenger/chat-messenger.component';
import { CreateProfileModalComponent } from './components/create-profile-modal/create-profile-modal.component';
import { ChatUserComponent } from './components/chat/chat-user/chat-user.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatChannelsComponent,
    ChatMessengerComponent,
    CreateProfileModalComponent,
    ChatUserComponent,
  ],
  entryComponents: [
    CreateProfileModalComponent,
  ],
  imports: [
    SharedModule,
  ],
  providers: [ChatService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
