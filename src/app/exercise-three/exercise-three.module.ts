import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseThreeRoutingModule } from './exercise-three-routing.module';
import { ExerciseThreeComponent } from './exercise-three.component';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    ExerciseThreeComponent
  ],
  imports: [
    CommonModule,
    ExerciseThreeRoutingModule,
    NgxSpinnerModule
  ]
})
export class ExerciseThreeModule { }
