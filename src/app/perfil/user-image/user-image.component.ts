import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Usuario from 'src/app/domain/usuarios/usuario';
import { mostrarError } from '../amigos/amigos.component';
import { UsuarioService } from 'src/app/servicios/usuario.service';


@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.scss'],
  providers: [UsuarioService]

})
export class UserImageComponent {
  IdUsuarioLogueado: Number
  usuarioLogueado: Usuario

  errors = []

  constructor(private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute) {
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
