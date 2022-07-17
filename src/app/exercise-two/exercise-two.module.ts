import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseTwoRoutingModule } from './exercise-two-routing.module';
import { ExerciseTwoComponent } from './exercise-two.component';


@NgModule({
  declarations: [
    ExerciseTwoComponent
  ],
  imports: [
    CommonModule,
    ExerciseTwoRoutingModule
  ]
})
export class ExerciseTwoModule { }
