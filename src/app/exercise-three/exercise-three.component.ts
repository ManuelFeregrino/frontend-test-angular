import { animate, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, OnInit, OnDestroy, HostListener, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { CharactersApiService } from '../core/services/characters-api.service';
import { DataObsService } from '../core/services/data-obs.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-exercise-three',
  templateUrl: './exercise-three.component.html',
  styleUrls: ['./exercise-three.component.scss'],
  animations: [
    trigger('smallUpDownAnimation', [
      transition(':enter', [
        style({transform: 'translateY(-0.25rem)', opacity: 0}),
        animate(500)
      ])
    ]),
    trigger("showEmailCustom", [
      transition(":enter", [
        style({ transform: 'translateY(100%)' }),
		    animate('500ms', style({ transform: 'translateY(0)' })),
      ]),
      transition(":leave", [
        animate('500ms', style({ transform: 'translateY(100%)' }))
      ]),
    ]),
  ]
})
export class ExerciseThreeComponent implements OnInit {

  characters: any;
  charactersUpdated: any;
  showButtonTop: boolean = false;
  private scrollHeight = 500;
  limit: number = 30;
  offset: number = 0;
  searchValue: string = '';
  showBtnClear: boolean = false;
  charactersTemp: any = [];

  constructor(private dataObsService: DataObsService,
              private characterService: CharactersApiService,
              private spinner: NgxSpinnerService,
              private dialog: MatDialog,
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
      if (this.characters.length > 5) {
        this.charactersTemp = this.charactersTemp.concat(this.characters);
        const search = this.characters.filter((item: any) => item.name === this.searchValue);
        this.characters = search ? search : this.characters;
    } else {
        let search = '';
        if (this.characters.length === 0) {
          search = this.charactersTemp.filter((item: any) => item.name === this.searchValue);
        }
        if (!search) {
          this.characterService.getCharactersByName(this.searchValue).subscribe((data) => {
            this.characters = data;
          });
        } else {
          this.characters = search;
        }
      }
    } else {
      if (this.charactersTemp.length > 5) {
          this.characters = this.charactersTemp;
          this.charactersTemp = [];
      } else {
        this.getCharacters();
      }
    }
  }

  edit(character: any) {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '500px',
      data: character
    });

    dialogRef.afterClosed().subscribe((saved:any) => {
      this.characters = this.characters.map((character: any) => {
        if (character.id === saved.data.id) {
           return saved.data;
        }
        return character;
      });
    });
  }

  new() {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe((saved:any) => {
      this.characters.unshift(saved.data);
    });
  }

  clear() {
    this.showBtnClear = false;
    this.searchValue = '';
    if (this.charactersTemp && this.charactersTemp.length > 5) {
      this.characters = this.charactersTemp;
      this.charactersTemp = [];
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
