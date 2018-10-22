import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IEventoService, EventoService, MockEventoService } from 'src/app/servicios/evento.service';
import Locacion from 'src/app/domain/eventos/locacion';
import EventoCerrado from 'src/app/domain/eventos/evento-cerrado';
import { toDate } from '@angular/common/src/i18n/format_date';
import { NuevoEvento } from '../nuevo-evento';
import { MockUsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-nuevo-evento-cerrado',
  templateUrl: './nuevo-evento-cerrado.component.html',
  styleUrls: ['./nuevo-evento-cerrado.component.scss']
})
export class NuevoEventoCerradoComponent extends NuevoEvento implements OnInit {
  constructor(serviceEvento: MockEventoService, serviceUsuario: MockUsuarioService, router: Router) {
    super(serviceEvento, router);

    this.nuevoEvento = new EventoCerrado();
    this.nuevoEvento.locacion = new Locacion();
    this.nuevoEvento.organizador = serviceUsuario.usuarioLogueado
  }

  ngOnInit() {}

  noPuedeCrearEvento() {
    return (
      super.noPuedeCrearEvento() || this.fechaMaximaDeConfirmacionIncorrecta()
    );
  }

  fechaMaximaDeConfirmacionIncorrecta(){
    return this.nuevoEvento.fechaMaximaConfirmacion >= this.nuevoEvento.fechaHoraInicio;
  }

  // filtroInicioDeEvento = (d: Date): boolean => {
  //   const day = d.getDay();
  //   // Prevent Saturday and Sunday from being selected.
  //   return day !== 0 && day !== 6;
  // }

  filtroFinDeEvento = (fechaFinEvento: Date): boolean => {
    const dia = fechaFinEvento.getDay();
    // Prevent Saturday and Sunday from being selected.
    return dia !== 0;
  };

  // filtroConfirmacionDeEvento = (d: Date): boolean => {
  //   const day = d.getDay();
  //   // Prevent Saturday and Sunday from being selected.
  //   return day !== 0 && day !== 6;
  // }

  // minimaFechaInicio(){
  //   let minimaFechaInicio = this.fechaDeHoy();
  //   minimaFechaInicio.setHours(this.fechaDeHoy().getHours() + 1);
  //   return minimaFechaInicio
  // }

  // minimaFechaFin(){
  //   let minimaFechaFin = this.minimaFechaInicio();
  //   minimaFechaFin.setMinutes(this.minimaFechaInicio().getMinutes() + 30);
  //   return minimaFechaFin
  // }

  // minimaFechaConfirmacion(){
  //   return this.fechaDeHoy()
  // }

  // fechaDeHoy(){
  //   return new Date()
  // }

  // maximaFechaConfirmacion(){
  //   let maximaFechaConfirmacion = this.nuevoEventoCerrado.fechaHoraInicio;
  //   maximaFechaConfirmacion.setMinutes(this.nuevoEventoCerrado.fechaHoraInicio.getMinutes() - 15);
  //   return maximaFechaConfirmacion
  // }
}
