import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.scss']
})
export class IconBarComponent  {
  icons = ["home", "chat", "person", "settings"];
  selectedIcon: string;
  
  constructor() {}
  selectIcon(icon:string){
    this.selectedIcon = icon;
    console.log(icon)
  }

}
