import { Component, OnInit } from '@angular/core';
import { DataObsService } from '../core/services/data-obs.service';

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
  styleUrls: ['./exercise-one.component.scss']
})
export class ExerciseOneComponent implements OnInit {

  constructor(private dataObsService: DataObsService) { }

  ngOnInit(): void {
  }

  close() {
    this.dataObsService.setDataObservable = 0;
  }

}
