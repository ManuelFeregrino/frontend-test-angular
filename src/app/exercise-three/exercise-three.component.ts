import { DOCUMENT } from '@angular/common';
import { Component, OnInit, OnDestroy, HostListener, Inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, Subscription } from 'rxjs';
import { CharactersApiService } from '../core/services/characters-api.service';
import { DataObsService } from '../core/services/data-obs.service';

@Component({
  selector: 'app-exercise-three',
  templateUrl: './exercise-three.component.html',
  styleUrls: ['./exercise-three.component.scss']
})
export class ExerciseThreeComponent implements OnInit {

  characters: any;
  showButtonTop: boolean = false;
  private scrollHeight = 500;
  limit: number = 30;
  offset: number = 0;
  searchValue: string = '';
  showBtnClear: boolean = false;

  constructor(private dataObsService: DataObsService,
              private characterService: CharactersApiService,
              private spinner: NgxSpinnerService,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.getCharacters();
  }
  
  close() {
    this.dataObsService.setDataObservable = 0;
  }

  getCharacters() {
    this.showBtnClear = false;
    this.spinner.show();
    this.characterService.getCharactersByPage(this.limit, this.offset).subscribe((data) => {
      this.spinner.hide();
      this.characters = data;
    });
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  onScroll() {
    this.offset = this.offset + this.limit;
    this.characterService.getCharactersByPage(this.limit, this.offset).subscribe((data) => {
      Array.prototype.push.apply(this.characters, data);
    });
  }

  search() {
    if (this.searchValue) {
      this.showBtnClear = true;
      this.characterService.getCharactersByName(this.searchValue).subscribe((data) => {
        this.characters = data;
      });
    } else {
      this.getCharacters();
    }
    
  }

  @HostListener("window:scroll")
  onWindowScroll() {
    const yOffSet = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButtonTop = (yOffSet || scrollTop) > this.scrollHeight;
  }

}
