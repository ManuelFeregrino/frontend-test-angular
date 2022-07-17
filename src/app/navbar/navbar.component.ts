import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DataObsService } from '../core/services/data-obs.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  subscription: Subscription;
  title: string = 'Prueba técnica';
  op = 0;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private dataObsService: DataObsService) {
    this.subscription = this.dataObsService.getDataObservable.subscribe((value) => {
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

  selectOption(op: number) {
    this.op = op;

    if (op === 1) {
      this.dataObsService.setDataObservable = 1;
    } else if (op === 2) {
      this.dataObsService.setDataObservable = 2;
    } else if (op === 3) {
      this.dataObsService.setDataObservable = 3;
    }

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
