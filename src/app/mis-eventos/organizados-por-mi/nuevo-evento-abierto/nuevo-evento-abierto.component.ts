import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { Router } from '@angular/router';
import { MockEventoService, EventoService } from 'src/app/servicios/evento.service';
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
  minimaFechaInicio = new Date()
  nuevoEventoAbierto: EventoAbierto = new EventoAbierto();

  nombreFormControl = new FormControl('', [
    Validators.required
    // Validators.pattern("[a-zA-Z\s]+$")
  ]);

  locacionFormControl = new FormControl('', [
    Validators.required
    // Validators.pattern("[a-zA-Z\s]+$")
  ]);

  constructor(private serviceEvento: EventoService, private router: Router) {
    this.nuevoEventoAbierto.locacion = new Locacion();
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.modal.show();
  }

  cancelar() {
    this.volverAOrganizadosPorMi()
  }

  aceptar() {
    //VALIDACION?
    this.serviceEvento.crearEvento(this.nuevoEventoAbierto)
    this.volverAOrganizadosPorMi()
  }

  volverAOrganizadosPorMi(){
    this.router.navigate(['/mis-eventos/organizados-por-mi']);
  }
}
