import { Component, HostListener, OnInit } from '@angular/core';
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

  @HostListener("window:scroll")
  onWindowScroll() {
    console.log('offset');
  }

  @HostListener('document:mousewheel', ['$event'])
  onDocumentMousewheelEvent(event:any) {

    const yOffSet = window.pageYOffset;
    console.log(yOffSet);
    console.log('yOffSet', yOffSet);
  }

}
