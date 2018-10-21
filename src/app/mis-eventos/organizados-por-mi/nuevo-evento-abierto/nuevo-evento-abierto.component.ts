import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { Router } from '@angular/router';
import { MockEventoService } from 'src/app/servicios/evento.service';
import EventoAbierto from 'src/app/domain/eventos/evento-abierto';
import { FormControl, Validators } from '@angular/forms';
import Locacion from 'src/app/domain/eventos/locacion';

@Component({
  selector: 'app-nuevo-evento-abierto',
  templateUrl: './nuevo-evento-abierto.component.html',
  styleUrls: ['./nuevo-evento-abierto.component.scss']
})
export class NuevoEventoAbiertoComponent implements OnInit, AfterViewInit {
  @ViewChild('modalEventoAbierto')
  modal: ModalDirective;

  nuevoEventoAbierto: EventoAbierto = new EventoAbierto();

  nombreFormControl = new FormControl('', [
    Validators.required
    // Validators.pattern("[a-zA-Z\s]+$")
  ]);

  locacionFormControl = new FormControl('', [
    Validators.required
    // Validators.pattern("[a-zA-Z\s]+$")
  ]);

  constructor(serviceEvento: MockEventoService, private router: Router) {
    this.nuevoEventoAbierto.locacion = new Locacion();
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
}
