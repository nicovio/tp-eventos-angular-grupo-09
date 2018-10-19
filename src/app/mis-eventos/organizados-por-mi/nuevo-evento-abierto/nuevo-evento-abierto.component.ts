import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalModule, ModalDirective } from 'angular-bootstrap-md';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/servicios/evento.service';
import EventoAbierto from 'src/app/domain/eventos/evento-abierto';
import { FormControl, Validators } from '@angular/forms';
import Locacion from 'src/app/domain/eventos/locacion';

@Component({
  selector: 'app-nuevo-evento-abierto',
  templateUrl: './nuevo-evento-abierto.component.html',
  styleUrls: ['./nuevo-evento-abierto.component.scss']
})
export class NuevoEventoAbiertoComponent implements OnInit {
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

  constructor(serviceEvento: EventoService, private router: Router) {
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
