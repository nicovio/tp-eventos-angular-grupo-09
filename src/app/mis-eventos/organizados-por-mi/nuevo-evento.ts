import { EventoService, MockEventoService } from 'src/app/servicios/evento.service';
import { Router } from '@angular/router';
import { ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { FormControl, Validators } from '@angular/forms';
import Evento from 'src/app/domain/eventos/evento';
import { MockUsuarioService, UsuarioService } from 'src/app/servicios/usuario.service';
import { mostrarError } from 'src/app/perfil/amigos/amigos.component';
import Locacion from 'src/app/domain/eventos/locacion';
import { LocacionService } from 'src/app/servicios/locacion.service';
import TipoUsuario from 'src/app/domain/usuarios/tipo-de-usuario';

export abstract class NuevoEvento  implements AfterViewInit {
  @ViewChild('modalEvento')
  modal: ModalDirective;
  errors = []
  eventosOrganizadosAbiertos
  eventosOrganizadosCerrados
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


  constructor(private serviceEvento: EventoService, private router: Router, private serviceUsuario: UsuarioService, private locacionService: LocacionService) {
    this.IDUsuarioLogueado = serviceUsuario.IDUsuarioLogueado
    try {
      this.initialize()
    } catch (error) {
      this.errors.push(error._body)
    }
  }

  async initialize(){
    this.eventosOrganizadosAbiertos = await this.serviceEvento.abiertosOrganizadosPorUsuario(this.IDUsuarioLogueado)
    this.eventosOrganizadosCerrados = await this.serviceEvento.cerradosOrganizadosPorUsuario(this.IDUsuarioLogueado)
    this.tipoUsuario = await this.serviceUsuario.getTipoDeUsuario(this.IDUsuarioLogueado)
    this.locaciones = await this.locacionService.locaciones()
    this.todosLosEventos = this.eventosOrganizadosAbiertos.concat(this.eventosOrganizadosCerrados)
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

  resfrescarPantalla() {
    this.router.navigateByUrl('/refrescar-pantalla', { skipLocationChange: true }).then(() =>
      this.volverAOrganizadosPorMi())
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
    return true
    // return fechaFin >= this.nuevoEvento.fechaHoraInicio;
  };

  public filtroFechaConfirmacion = (fechaMaximaConfirmacion: Date): boolean => {
    return true
    // return fechaMaximaConfirmacion <= this.nuevoEvento.fechaHoraInicio;
  };
}
