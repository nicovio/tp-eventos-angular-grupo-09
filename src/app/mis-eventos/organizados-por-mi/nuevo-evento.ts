import { EventoService } from 'src/app/servicios/evento.service';
import { Router } from '@angular/router';
import { ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { FormControl, Validators } from '@angular/forms';
import Evento from 'src/app/domain/eventos/evento';

export abstract class NuevoEvento implements AfterViewInit {
  @ViewChild('modalEvento')
  modal: ModalDirective;

  public hoy = new Date();

  nuevoEvento: Evento;

  nombreFormControl = new FormControl('', [
    Validators.required
    // Validators.pattern("[a-zA-Z\s]+$")
  ]);

  locacionFormControl = new FormControl('', [
    Validators.required
    // Validators.pattern("[a-zA-Z\s]+$")
  ]);

  fechaInicioFormControl = new FormControl('', [
    Validators.required
    // Validators.pattern("[a-zA-Z\s]+$")
  ]);

  fechaFinFormControl = new FormControl('', [
    Validators.required
    // Validators.pattern("[a-zA-Z\s]+$")
  ]);

  fechaMaximaFormControl = new FormControl('', [
    Validators.required
    // Validators.pattern("[a-zA-Z\s]+$")
  ]);

  minimaFecha = new Date();

  constructor(private serviceEvento: EventoService, private router: Router) {}

  ngAfterViewInit() {
    this.modal.show();
  }

  cancelar() {
    this.volverAOrganizadosPorMi();
  }

  aceptar() {
    //VALIDACION?
    this.serviceEvento.crearEvento(this.nuevoEvento);
    this.volverAOrganizadosPorMi();
  }

  volverAOrganizadosPorMi() {
    this.router.navigate(['/mis-eventos/organizados-por-mi']);
  }

  noPuedeCrearEvento() {
    return (
      this.empiezaDespuesDeTerminar() ||
      this.noPusoNombre() ||
      this.noPusoLocacion() ||
      this.noPusoFechas()
    );
  }

  empiezaDespuesDeTerminar() {
    return this.nuevoEvento.fechaHoraInicio >= this.nuevoEvento.fechaHoraFin;
  }

  noPusoNombre() {
    return (
      this.nuevoEvento.descripcion === '' ||
      this.nuevoEvento.descripcion === undefined
    );
  }

  noPusoLocacion() {
    return (
      this.nuevoEvento.locacion.descripcion === '' ||
      this.nuevoEvento.locacion.descripcion === undefined
    );
  }

  noPusoFechas() {
    return (
      this.nuevoEvento.fechaHoraInicio === undefined ||
      this.nuevoEvento.fechaHoraFin === undefined
    );
  }

  public filtroFechaFin = (fechaFin: Date): boolean => {
    return fechaFin >= this.nuevoEvento.fechaHoraInicio;
  };

  public filtroFechaConfirmacion = (fechaMaximaConfirmacion: Date): boolean => {
    return fechaMaximaConfirmacion <= this.nuevoEvento.fechaHoraInicio;
  };
}
