import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataObsService } from '../core/services/data-obs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  op: number = 0;
  subscription: Subscription;
  title: string = 'Prueba técnica';

  constructor(private dataObsService: DataObsService) {
        this.subscription = this.dataObsService.getDataObservable.subscribe((value) => {
            console.log('value', value);
          this.op = value;
          if (this.op === 1) {
            this.title = 'Números primarios';
          } else if (this.op === 2) {
            this.title = 'Servicios';
          } else if (this.op === 3) {
            this.title = 'Personajes de Marvel';
          } else {
            this.title = 'Prueba técnica';
          }
        });
  }

  ngOnInit(): void {
  }

}
