//import * as console from 'console';
import EventoAbierto from '../../../../domain/eventos/evento-abierto';
import { EventoAbiertoService } from '../../../../servicios/evento-abierto.service';
import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-textbox-nombre',
  templateUrl: './textbox-nombre.component.html',
  styleUrls: ['./textbox-nombre.component.scss']
})
export class TextboxNombreComponent{
  
  unEvento: EventoAbierto = new EventoAbierto
  //EJEMPLO DE SERVICE
  constructor(serviceEvento: EventoAbiertoService) {

    console.log(serviceEvento.eventoAbierto.fechaHoraInicio);
    this.unEvento.locacion = serviceEvento.eventoAbierto.locacion
    
  }

  nombreFormControl = new FormControl('', [
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
