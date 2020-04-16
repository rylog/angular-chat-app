import { Component, OnInit, OnDestroy, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  constructor(private componentFactoryResolver:ComponentFactoryResolver){
  }
  ngOnInit(){

  }
  ngOnDestroy(){

  }
}
