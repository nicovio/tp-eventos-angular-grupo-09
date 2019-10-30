import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Usuario from 'src/app/domain/usuarios/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

export function mostrarError(component, error) {
  console.log("error", error)
  component.errors.push(error._body)
}

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.scss'],
  providers: []
})
export class AmigosComponent {
  IdUsuarioLogueado: Number
  IdUsuarioAEliminar: Number
  amigosUsuario: Array<Usuario>
  errors = []

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.IdUsuarioLogueado = usuarioService.IDUsuarioLogueado
    try {
      this.initialize()
    } catch (error) {
      this.errors.push(error._body)
    }
  }

  setUsuarioAEliminar(idUsuario: Number) {
    this.IdUsuarioAEliminar = idUsuario;
  }

  async eliminarAmigo() {
    try {
      this.errors = []
      await this.usuarioService.eliminarAmigo(this.IdUsuarioLogueado, this.IdUsuarioAEliminar)
      this.amigosUsuario = this.amigosUsuario.filter(amigo => amigo.id != this.IdUsuarioAEliminar)
    } catch (e) {
      this.errors.push(e._body)
    }
  }

  async initialize() {
    try {
      this.amigosUsuario = await this.usuarioService.getAmigosEnServidor(this.IdUsuarioLogueado)
    } catch (error) {
      mostrarError(this, error)
    }
  }
}