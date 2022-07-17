import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseOneComponent } from './exercise-one.component';

const routes: Routes = [
    {
        path: '',
        component: ExerciseOneComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciseOneRoutingModule { }
