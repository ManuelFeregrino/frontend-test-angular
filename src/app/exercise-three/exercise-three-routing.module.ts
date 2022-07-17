import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseThreeComponent } from './exercise-three.component';

const routes: Routes = [
    {
        path: '',
        component: ExerciseThreeComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciseThreeRoutingModule { }
