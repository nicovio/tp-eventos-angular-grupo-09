import { Component, OnInit, Input } from '@angular/core';
import Usuario from '../../../domain/usuario';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.scss']
})
export class AmigosComponent {
  usuarioAmigos: Usuario

  constructor(private usuarioService: UsuarioService) {
    this.usuarioAmigos = this.usuarioService.getUsuarioByUsername('@kara95')
  }
}
