import { Component } from '@angular/core';
import { MockUsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.scss']
})
export class UserImageComponent {
  usuarioImage

  constructor(private usuarioService: MockUsuarioService) {
    this.usuarioImage = usuarioService.usuarioLogueado
  }
}
