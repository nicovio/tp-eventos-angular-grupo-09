import { Component } from '@angular/core';
import Usuario from '../../../domain/usuario';
import { usuarioService } from 'src/app/app.component';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.scss']
})
export class AmigosComponent{
  usuarioAmigos : Usuario

  constructor() {
    this.usuarioAmigos = usuarioService.getUsuarioByUsername('@kara95')
  }

}