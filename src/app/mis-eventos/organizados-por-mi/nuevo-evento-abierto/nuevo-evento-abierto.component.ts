import { Component } from '@angular/core';
import EventoAbierto from 'src/app/domain/eventos/evento-abierto';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { EventoAbiertoService } from 'src/app/servicios/evento-abierto.service';

@Component({
  selector: 'app-nuevo-evento-abierto',
  templateUrl: './nuevo-evento-abierto.component.html',
  styleUrls: ['./nuevo-evento-abierto.component.scss']
})
export class NuevoEventoAbiertoComponent{
  nuevoEvento: EventoAbierto = new EventoAbierto

  constructor(serviceEvento: EventoAbiertoService) {
    console.log(serviceEvento.eventoAbierto.fechaHoraInicio);
    this.nuevoEvento.locacion = serviceEvento.eventoAbierto.locacion
  }
  validacionFormControl = new FormControl('', [
    Validators.required,
    // Validators.pattern("[a-zA-Z\s]+$")
  ]);

  abrirModal(){
    
  }

  matcher = new MyErrorStateMatcher();
}


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}