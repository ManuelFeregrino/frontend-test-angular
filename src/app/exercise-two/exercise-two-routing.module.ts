import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseTwoComponent } from './exercise-two.component';

const routes: Routes = [
    {
        path: '',
        component: ExerciseTwoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciseTwoRoutingModule { }
