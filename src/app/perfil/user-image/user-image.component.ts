import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Usuario from 'src/app/domain/usuarios/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';


@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.scss'],
  providers: []
})
export class UserImageComponent {
  IdUsuarioLogueado: Number
  usuarioLogueado: Usuario
  errors = []

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.IdUsuarioLogueado = usuarioService.IDUsuarioLogueado
    try {
      this.initialize()
    } catch (error) {
      this.errors.push(error._body)
    }

  }

  async initialize() {
    this.usuarioLogueado = await this.usuarioService.getUsuarioById(this.IdUsuarioLogueado)
  }
}
