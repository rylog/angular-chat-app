import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ScrollbarViewportComponent } from './scrollbar-viewport/scrollbar-viewport.component';
import { ScrollingModule } from '@angular/cdk/scrolling';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatTooltipModule } from '@angular/material/tooltip';



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

        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatTooltipModule,
    ],
})
export class SharedModule { }