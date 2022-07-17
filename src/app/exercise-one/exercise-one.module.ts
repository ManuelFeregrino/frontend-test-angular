import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseOneRoutingModule } from './exercise-one-routing.module';
import { ExerciseOneComponent } from './exercise-one.component';


@NgModule({
  declarations: [
    ExerciseOneComponent
  ],
  imports: [
    CommonModule,
    ExerciseOneRoutingModule
  ]
})
export class ExerciseOneModule { }
