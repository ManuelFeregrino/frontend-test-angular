import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseOneRoutingModule } from './exercise-one-routing.module';
import { ExerciseOneComponent } from './exercise-one.component';
import { HeaderModule } from '../header/header.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExerciseOneComponent
  ],
  imports: [
    CommonModule,
    ExerciseOneRoutingModule,
    HeaderModule,
    FormsModule,
  ]
})
export class ExerciseOneModule { }
