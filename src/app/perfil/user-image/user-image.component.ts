import { Component, OnInit, Input } from '@angular/core';
import Usuario from '../../../domain/usuario';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.scss']
})
export class UserImageComponent {
  usuarioImage: Usuario

  constructor(private usuarioService: UsuarioService) {
    this.usuarioImage = this.usuarioService.getUsuarioByUsername('@kara95')
  }


}
