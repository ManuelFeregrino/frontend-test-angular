import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'exercise-one',
        loadChildren: () => import('./exercise-one/exercise-one.module').then(m => m.ExerciseOneModule)
    },
    {
        path: 'exercise-two',
        loadChildren: () => import('./exercise-two/exercise-two.module').then(m => m.ExerciseTwoModule)
    },
    {
        path: 'exercise-three',
        loadChildren: () => import('./exercise-three/exercise-three.module').then(m => m.ExerciseThreeModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
