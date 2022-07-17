import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CharactersApiService } from '../core/services/characters-api.service';
import { DataObsService } from '../core/services/data-obs.service';

@Component({
  selector: 'app-exercise-three',
  templateUrl: './exercise-three.component.html',
  styleUrls: ['./exercise-three.component.scss']
})
export class ExerciseThreeComponent implements OnInit {

  // allCharacters: Observable<any>;
  characters: any;

  constructor(private dataObsService: DataObsService, private characterService: CharactersApiService) {
  }

  ngOnInit(): void {
    this.getCharacters();
  }
  
  close() {
    this.dataObsService.setDataObservable = 0;
  }

  getCharacters() {
    this.characterService.getAllCharacters().subscribe((data) => {
      console.log(data);
      this.characters = data;
    });
  }

  ngOnDestroy() {
    // this.allCharacters.unsubscribe();
  }

}
