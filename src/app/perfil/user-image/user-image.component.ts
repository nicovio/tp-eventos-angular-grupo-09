import { Component } from '@angular/core';
import { usuario } from 'src/app/app.component';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.scss']
})
export class UserImageComponent {
  usuarioImage = usuario;
}
