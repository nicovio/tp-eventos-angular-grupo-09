import { Component, OnInit } from '@angular/core';
import { MockUsuarioService, UsuarioService } from 'src/app/servicios/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

export function mostrarError(component, error) {
  console.log("error", error)
  component.errors.push(error._body)
}

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.scss'],
  providers: [UsuarioService]
})
export class AmigosComponent implements OnInit {

  IdUsuarioLogueado: Number
  IdUsuarioAEliminar: Number
  amigosUsuario
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


  async ngOnInit() {
  }

  async eliminarAmigo() {
    try {
      this.errors = []
      await this.usuarioService.eliminarAmigo(this.IdUsuarioLogueado, this.IdUsuarioAEliminar)
    } catch (e) {
      this.errors.push(e._body)
    }
    this.resfrescarPantalla()
  }


  async initialize() {
    try {
      this.amigosUsuario = await this.usuarioService.getAmigosEnServidor(this.IdUsuarioLogueado)
    } catch (error) {
      mostrarError(this, error)
    }
  }

  resfrescarPantalla(){
    this.router.navigateByUrl('/refrescar-pantalla', { skipLocationChange: true }).then(() =>
      this.router.navigate(["/perfil"]));
  }


}