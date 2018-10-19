import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ModalModule, ModalDirective } from 'angular-bootstrap-md';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-evento-abierto',
  templateUrl: './nuevo-evento-abierto.component.html',
  styleUrls: ['./nuevo-evento-abierto.component.scss']
})
export class NuevoEventoAbiertoComponent implements OnInit {
  @ViewChild('eventoAbierto') modal: ModalDirective;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.modal.show();
  }

  cancelar(){
    this.router.navigate(['/mis-eventos/organizados-por-mi']);
  }

  aceptar(){
    this.router.navigate(['/mis-eventos/organizados-por-mi']);
  }
}
