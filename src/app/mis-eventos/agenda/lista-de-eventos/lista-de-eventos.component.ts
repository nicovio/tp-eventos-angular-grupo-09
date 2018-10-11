import { Component, Input } from '@angular/core';
import Evento from 'src/app/domain/eventos/evento';

@Component({
  selector: 'lista-de-eventos',
  templateUrl: './lista-de-eventos.component.html',
  styleUrls: ['./lista-de-eventos.component.scss']
})

export class ListaDeEventosComponent {

  @Input() titulo: String

  @Input() eventosAMostrar: Array<Evento>

}
