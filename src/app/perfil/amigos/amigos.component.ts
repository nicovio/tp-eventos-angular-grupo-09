import { Component } from '@angular/core';
import { MockUsuarioService } from 'src/app/servicios/usuario.service';
import Usuario from 'src/app/domain/usuarios/usuario';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.scss']
})
export class AmigosComponent {
  
  usuarioAmigos: Usuario
  usuarioAEliminar: Usuario

  constructor(private usuarioService: MockUsuarioService){
    this.usuarioAmigos = usuarioService.usuarioLogueado
  }

  setUsuarioAEliminar(usuario: Usuario){
    this.usuarioAEliminar = usuario;
  }
}