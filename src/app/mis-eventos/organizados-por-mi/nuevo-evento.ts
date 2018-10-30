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
import { OrganizadosPorMiComponent } from './organizados-por-mi.component';

export abstract class NuevoEvento extends OrganizadosPorMiComponent implements AfterViewInit {
  @ViewChild('modalEvento')
  modal: ModalDirective;
  errors = []
  routerNuevoEvento
  servicioUsuario

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


  constructor(serviceEvento: EventoService, router: Router, serviceUsuario: UsuarioService, locacionService: LocacionService) {
    super(serviceEvento, router, serviceUsuario, locacionService)
    this.servicioUsuario = serviceUsuario
    this.routerNuevoEvento = router
    try {
      this.initialize()
    } catch (error) {
      this.errors.push(error._body)
    }
  }

  ngAfterViewInit() {
    this.modal.show();
  }


  cancelar() {
    this.volverAOrganizadosPorMi();
  }


  volverAOrganizadosPorMi() {
    this.routerNuevoEvento.navigate(['/mis-eventos/organizados-por-mi']);
  }

  resfrescarPantalla() {
    this.routerNuevoEvento.navigateByUrl('/refrescar-pantalla', { skipLocationChange: true }).then(() =>
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
    return fechaFin >= this.nuevoEvento.fechaHoraInicio;
  };

  public filtroFechaConfirmacion = (fechaMaximaConfirmacion: Date): boolean => {
    return fechaMaximaConfirmacion <= this.nuevoEvento.fechaHoraInicio;
  };
}
