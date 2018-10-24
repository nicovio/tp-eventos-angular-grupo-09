import { Component } from '@angular/core';
import { MockUsuarioService, UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.scss']
})
export class UserImageComponent {
  usuarioImage
  // loggedUser
  constructor(private usuarioService: MockUsuarioService, private usuarioServicio: UsuarioService) {
    this.usuarioImage = usuarioService.usuarioLogueado
    // this.loggedUser = usuarioServicio.usuarioLogueado
  }
}
