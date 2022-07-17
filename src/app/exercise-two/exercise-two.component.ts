import { Component, OnInit } from '@angular/core';
import { DataObsService } from '../core/services/data-obs.service';

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.scss']
})
export class ExerciseTwoComponent implements OnInit {

  constructor(private dataObsService: DataObsService) { }

  ngOnInit(): void {
  }

  close() {
    this.dataObsService.setDataObservable = 0;
  }

}
