import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseThreeRoutingModule } from './exercise-three-routing.module';
import { ExerciseThreeComponent } from './exercise-three.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { HeaderModule } from '../header/header.module';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExerciseThreeComponent
  ],
  imports: [
    CommonModule,
    ExerciseThreeRoutingModule,
    NgxSpinnerModule,
    HeaderModule,
    InfiniteScrollModule,
    FormsModule
  ]
})
export class ExerciseThreeModule { }
