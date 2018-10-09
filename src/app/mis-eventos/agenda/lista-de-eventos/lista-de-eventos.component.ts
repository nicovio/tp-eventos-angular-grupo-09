import { Component, Input } from '@angular/core';
import { usuario } from '../../../app.component';

@Component({
  selector: 'lista-de-eventos',
  templateUrl: './lista-de-eventos.component.html',
  styleUrls: ['./lista-de-eventos.component.scss']
})
export class ListaDeEventosComponent {

  @Input() criterioDeFiltro: String;

  usuarioEventos = usuario;

}
