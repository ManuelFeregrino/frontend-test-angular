import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseTwoRoutingModule } from './exercise-two-routing.module';
import { ExerciseTwoComponent } from './exercise-two.component';
import { HeaderModule } from '../header/header.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExerciseTwoComponent
  ],
  imports: [
    CommonModule,
    ExerciseTwoRoutingModule,
    HeaderModule,
    FormsModule,
  ]
})
export class ExerciseTwoModule { }
