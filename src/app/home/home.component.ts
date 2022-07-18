import { Component, OnInit } from '@angular/core';
import { DataObsService } from '../core/services/data-obs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private dataObsService: DataObsService) { }

  ngOnInit(): void {
  }

  selectOption(op: number) {

    if (op === 1) {
      this.dataObsService.setDataObservable = 1;
    } else if (op === 2) {
      this.dataObsService.setDataObservable = 2;
    } else if (op === 3) {
      this.dataObsService.setDataObservable = 3;
    }

  }

}
