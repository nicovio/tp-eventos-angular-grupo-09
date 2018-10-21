import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { Router } from '@angular/router';
import { IEventoService, EventoService } from 'src/app/servicios/evento.service';
import { FormControl, Validators } from '@angular/forms';
import Locacion from 'src/app/domain/eventos/locacion';
import EventoCerrado from 'src/app/domain/eventos/evento-cerrado';
import { toDate } from '@angular/common/src/i18n/format_date';

@Component({
  selector: 'app-nuevo-evento-cerrado',
  templateUrl: './nuevo-evento-cerrado.component.html',
  styleUrls: ['./nuevo-evento-cerrado.component.scss']
})
export class NuevoEventoCerradoComponent implements OnInit, AfterViewInit {
  @ViewChild('modalEventoCerrado')
  modal: ModalDirective;
  minimaFechaInicio = new Date()
  nuevoEventoCerrado: EventoCerrado = new EventoCerrado();

  nombreFormControl = new FormControl('', [
    Validators.required
    // Validators.pattern("[a-zA-Z\s]+$")
  ]);

  locacionFormControl = new FormControl('', [
    Validators.required
    // Validators.pattern("[a-zA-Z\s]+$")
  ]);

  constructor(private serviceEvento: EventoService, private router: Router) {
    this.nuevoEventoCerrado.locacion = new Locacion();

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.modal.show();
  }

  cancelar() {
    this.volverAOrganizadosPorMi()
  }

  aceptar() {
    //VALIDACION?
    this.serviceEvento.crearEvento(this.nuevoEventoCerrado)
    this.volverAOrganizadosPorMi()
  }

  volverAOrganizadosPorMi(){
    this.router.navigate(['/mis-eventos/organizados-por-mi']);
  }

  // filtroInicioDeEvento = (d: Date): boolean => {
  //   const day = d.getDay();
  //   // Prevent Saturday and Sunday from being selected.
  //   return day !== 0 && day !== 6;
  // }

  filtroFinDeEvento = (fechaFinEvento: Date) : boolean => {
    const dia = fechaFinEvento.getDay();
    // Prevent Saturday and Sunday from being selected.
    return dia !== 0;
  }

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
