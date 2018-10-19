import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-textbox-locacion',
  templateUrl: './textbox-locacion.component.html',
  styleUrls: ['./textbox-locacion.component.scss']
})
export class TextboxLocacionComponent{
  locacionFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("[a-zA-Z\s]+$")
  ]);

  
  validador = new ValidacionNombre();
}


/** Error cuando el control esta en estado dirty, touched, o submitted. */
export class ValidacionNombre implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
