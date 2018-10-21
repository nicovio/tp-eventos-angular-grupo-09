import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { Router } from '@angular/router';
import { MockEventoService } from 'src/app/servicios/evento.service';
import EventoAbierto from 'src/app/domain/eventos/evento-abierto';
import { FormControl, Validators } from '@angular/forms';
import Locacion from 'src/app/domain/eventos/locacion';
import EventoCerrado from 'src/app/domain/eventos/evento-cerrado';
import { DateAdapter } from '@angular/material';

@Component({
  selector: 'app-nuevo-evento-cerrado',
  templateUrl: './nuevo-evento-cerrado.component.html',
  styleUrls: ['./nuevo-evento-cerrado.component.scss']
})
export class NuevoEventoCerradoComponent implements OnInit, AfterViewInit {
  @ViewChild('modalEventoCerrado')
  modal: ModalDirective;

  nuevoEventoCerrado: EventoCerrado = new EventoCerrado();

  nombreFormControl = new FormControl('', [
    Validators.required
    // Validators.pattern("[a-zA-Z\s]+$")
  ]);

  locacionFormControl = new FormControl('', [
    Validators.required
    // Validators.pattern("[a-zA-Z\s]+$")
  ]);

  constructor(serviceEvento: MockEventoService, private router: Router, private adapter: DateAdapter<any>) {
    this.nuevoEventoCerrado.locacion = new Locacion();
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.modal.show();
  }

  cancelar() {
    this.router.navigate(['/mis-eventos/organizados-por-mi']);
  }

  aceptar() {
    this.router.navigate(['/mis-eventos/organizados-por-mi']);
  }

  espaniol() {
    this.adapter.setLocale('es');
  }
}
