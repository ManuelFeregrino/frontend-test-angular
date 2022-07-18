import { Component, HostListener, OnInit } from '@angular/core';
import { DataObsService } from '../core/services/data-obs.service';
import { NodeApiService } from '../core/services/node-api.service';

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
  styleUrls: ['./exercise-one.component.scss']
})
export class ExerciseOneComponent implements OnInit {

  primeNumbers: any = [];
  startNumber: number = 1;
  endNumber: number = 10;
  range: any = {
    "startNumber":1,
    "endNumber": 10
  };

  constructor(private dataObsService: DataObsService, private nodeService: NodeApiService) { }

  ngOnInit(): void {
    this.nodeService.calculatePrimeNumbers(this.range).subscribe((data: any) => {
      this.primeNumbers = data.body;
    });
  }

  close() {
    this.dataObsService.setDataObservable = 0;
  }

  calculate() {
    const rage = {
      startNumber: this.startNumber,
      endNumber: this.endNumber
    }
    this.nodeService.calculatePrimeNumbers(rage).subscribe((data: any) => {
      this.primeNumbers = data.body;
    });
  }

}
