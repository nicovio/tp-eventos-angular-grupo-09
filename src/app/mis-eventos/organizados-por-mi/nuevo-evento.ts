import { EventoService } from 'src/app/servicios/evento.service';
import { Router } from '@angular/router';
import { ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { FormControl, Validators } from '@angular/forms';
import Evento from 'src/app/domain/eventos/evento';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Locacion from 'src/app/domain/eventos/locacion';
import { LocacionService } from 'src/app/servicios/locacion.service';
import TipoUsuario from 'src/app/domain/usuarios/tipo-de-usuario';

export abstract class NuevoEvento implements AfterViewInit {
  @ViewChild('modalEvento')
  modal: ModalDirective;
  errors = []
  eventosOrganizadosAbiertos: Evento[]
  eventosOrganizadosCerrados: Evento[]
  locaciones: Array<Locacion>
  todosLosEventos: Array<Evento>
  tipoUsuario: TipoUsuario
  nuevoEvento: Evento;
  IDUsuarioLogueado: Number
  hoy = new Date();

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


  constructor(public serviceEvento: EventoService, private router: Router, public serviceUsuario: UsuarioService, public locacionService: LocacionService) {
    this.IDUsuarioLogueado = serviceUsuario.IDUsuarioLogueado
    try {
      this.initialize()
    } catch (error) {
      this.errors.push(error._body)
    }
  }

  async initialize() {
    this.eventosOrganizadosAbiertos = this.serviceEvento.eventosAbiertosOrganizados
    this.eventosOrganizadosCerrados = this.serviceEvento.eventosCerradosOrganizados
    this.tipoUsuario = await this.serviceUsuario.getTipoDeUsuario(this.IDUsuarioLogueado)
    this.locaciones = await this.locacionService.locaciones()
    this.todosLosEventos = this.eventosOrganizadosAbiertos.concat(this.eventosOrganizadosCerrados)
  }

  dataIsReady() {
    return this.eventosOrganizadosCerrados && this.eventosOrganizadosCerrados && this.locaciones && this.todosLosEventos && this.tipoUsuario
  }

  ngAfterViewInit() {
    this.modal.show();
  }

  cancelar() {
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
      this.noPusoFechas() ||
      this.superaEventosSimultaneos() ||
      this.superaEventosMensuales()
    );
  }

  llenoFechas() {
    return this.nuevoEvento.fechaHoraInicio && this.nuevoEvento.fechaHoraFin
  }

  superaEventosSimultaneos() {
    return this.tipoUsuario.superaMaximoDeEventosSimultaneos(this.nuevoEvento, this.todosLosEventos)
  }

  superaEventosMensuales() {
    return this.tipoUsuario.superaMaximoDeEventosMensuales(this.nuevoEvento, this.todosLosEventos)
  }

  empiezaDespuesDeTerminar() {
    return this.nuevoEvento.fechaHoraInicio >= this.nuevoEvento.fechaHoraFin;
  }

  noPusoNombre() {
    return !this.nuevoEvento.descripcion
  }

  noPusoLocacion() {
    return !this.nuevoEvento.locacion
  }

  noPusoFechas() {
    return !this.nuevoEvento.fechaHoraInicio || !this.nuevoEvento.fechaHoraFin
  }

  public filtroFechaFin = (fechaFin: Date): boolean => {
    return true
    // return fechaFin >= this.nuevoEvento.fechaHoraInicio;
  };

  public filtroFechaConfirmacion = (fechaMaximaConfirmacion: Date): boolean => {
    return true
    // return fechaMaximaConfirmacion <= this.nuevoEvento.fechaHoraInicio;
  };
}
