import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ScrollbarViewportComponent } from './scrollbar-viewport/scrollbar-viewport.component';
import { ScrollingModule } from '@angular/cdk/scrolling';


import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [
        ScrollbarViewportComponent,
    ],
    exports: [
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        ScrollingModule,
        ScrollbarViewportComponent,

        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatExpansionModule,
        MatDividerModule,
        MatListModule,
    ],
})
export class SharedModule { }