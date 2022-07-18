import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  characterForm: FormGroup;
  character: any;
  editing: any;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<FormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
      this.character = data;
      this.characterForm = this.initForm();
      if (this.character && this.character.id) {
        this.editing = true;
        this.loadDataForm(this.character);
      }
  }

  ngOnInit(): void {
  }

  private initForm() {
    return this.formBuilder.group({
      id: [''],
      name: [
        '',
        Validators.compose([Validators.required, Validators.min(0), Validators.max(9999)])
      ],
      description: [
        '',
        Validators.compose([Validators.required, Validators.min(0), Validators.max(9999)])
      ],
      thumbnail: [
        '',
        Validators.compose([Validators.required, Validators.min(0), Validators.max(9999)])
      ],
      modified: ['']
    });
  }

  loadDataForm(data: any) {
    this.characterForm.patchValue({
      id: data.id,
      name: data.name,
      description: data.description,
      thumbnail: data.thumbnail
    });
  }

  doAction() {
    this.dialogRef.close({event: 'Save', data: this.characterForm.value});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

  save() {
    if (this.editing) {
      this.characterForm.patchValue({
        modified: new Date
      });
    } else {
      this.characterForm.patchValue({
        id: uuidv4(),
        modified: new Date
      });
    }

    if (this.characterForm.value.thumbnail === '') {
        this.characterForm.patchValue({
            thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
        });
    }

    this.doAction();
  }

}
