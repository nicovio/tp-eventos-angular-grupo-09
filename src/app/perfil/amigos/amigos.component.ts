import { Component, OnInit, Input } from '@angular/core';
import Usuario from '../../../domain/usuario';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.scss']
})
export class AmigosComponent  {
  @Input() usuarioAmigos: Usuario;

  constructor() { }
}
