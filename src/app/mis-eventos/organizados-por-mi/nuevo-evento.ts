import { EventoService, MockEventoService } from 'src/app/servicios/evento.service';
import { Router } from '@angular/router';
import { ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { FormControl, Validators } from '@angular/forms';
import Evento from 'src/app/domain/eventos/evento';
import { MockUsuarioService } from 'src/app/servicios/usuario.service';
import { mostrarError } from 'src/app/perfil/amigos/amigos.component';
import Locacion from 'src/app/domain/eventos/locacion';
import { LocacionService } from 'src/app/servicios/locacion.service';

export abstract class NuevoEvento implements AfterViewInit {
  @ViewChild('modalEvento')
  modal: ModalDirective;
  locaciones: Array<Locacion>
  errors = []

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

  constructor(private serviceEvento: EventoService, private router: Router, private locacionService: LocacionService) { 
    try {
      this.initialize()
    } catch (error) {
      this.errors.push(error._body)
    }
  }

  ngAfterViewInit() {
    this.modal.show();
  }

  async initialize() {
    this.locaciones = await this.locacionService.locaciones()
  }

  cancelar() {
    this.volverAOrganizadosPorMi();
  }

  async aceptar(idUsuarioLogueado: number) {
    try {
      await this.serviceEvento.crearEventoAbierto(idUsuarioLogueado, this.nuevoEvento);
    } catch (error) {
      mostrarError(this, error)
    }
    this.resfrescarPantalla();
  }


  volverAOrganizadosPorMi() {
    this.router.navigate(['/mis-eventos/organizados-por-mi']);
  }

  resfrescarPantalla() {
    this.router.navigateByUrl('/refrescar-pantalla', { skipLocationChange: true }).then(() =>
      this.volverAOrganizadosPorMi())
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
      this.nuevoEvento.locacion === undefined
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
