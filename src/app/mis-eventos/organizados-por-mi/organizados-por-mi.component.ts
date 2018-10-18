import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NuevoEventoAbiertoComponent } from './nuevo-evento-abierto/nuevo-evento-abierto.component';
import { EventoService } from 'src/app/servicios/evento-abierto.service';
import EventoAbierto from 'src/app/domain/eventos/evento-abierto';
import { ErrorStateMatcher } from '@angular/material';
import { FormGroupDirective, NgForm, FormControl, Validators } from '@angular/forms';
import EventoCerrado from 'src/app/domain/eventos/evento-cerrado';

@Component({
  selector: 'app-organizados-por-mi',
  templateUrl: './organizados-por-mi.component.html',
  styleUrls: ['./organizados-por-mi.component.scss'],
})
export class OrganizadosPorMiComponent implements AfterViewInit{
  @ViewChild(NuevoEventoAbiertoComponent)
  eventoAbiertoCreado: NuevoEventoAbiertoComponent
  nuevoEventoAbierto: EventoAbierto = new EventoAbierto
  nuevoEventoCerrado: EventoCerrado = new EventoCerrado

  constructor(serviceEvento: EventoService) {
    // console.log(serviceEvento.eventoAbierto.fechaHoraInicio);
    this.nuevoEventoAbierto.locacion = serviceEvento.eventoAbierto.locacion
    this.nuevoEventoCerrado.locacion = serviceEvento.eventoCerrado.locacion
  }

  validar = new FormControl('', [
    Validators.required
    // Validators.pattern("[a-zA-Z\s]+$")
  ]);

  validacionLocacion = new FormControl('', [
    Validators.required
    // Validators.pattern("[a-zA-Z\s]+$")
  ]);
  
  ngAfterViewInit() {
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