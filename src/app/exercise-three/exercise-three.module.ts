import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseThreeRoutingModule } from './exercise-three-routing.module';
import { ExerciseThreeComponent } from './exercise-three.component';


@NgModule({
  declarations: [
    ExerciseThreeComponent
  ],
  imports: [
    CommonModule,
    ExerciseThreeRoutingModule
  ]
})
export class ExerciseThreeModule { }
