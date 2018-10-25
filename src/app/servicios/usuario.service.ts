import { Injectable } from '@angular/core'
import Usuario from 'src/app/domain/usuarios/usuario';
import EventoAbierto from '../domain/eventos/evento-abierto';
import EventoCerrado from '../domain/eventos/evento-cerrado';
import Evento from '../domain/eventos/evento';
import Locacion from '../domain/eventos/locacion';
import { Invitacion } from '../domain/eventos/invitacion';
import { Http } from '@angular/http';
import { REST_SERVER_URL } from './configuration';

export interface IUsuarioService {

}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements IUsuarioService {
  IDUsuarioLogueado: Number
  

  constructor(private http: Http) {
    const IDKaraDanvers = 0   //SE LO DEBERIA PEDIR AL SERVER POR LOGIN
    this.IDUsuarioLogueado = IDKaraDanvers
  }

  async getUsuarioById(userID: Number) {
    const res = await this.http.get(REST_SERVER_URL + '/usuario/' + userID).toPromise()
    return Usuario.fromJSON(res.json())
  }

  async getAmigosEnServidor(userID: Number) {
    const res = await this.http.get(REST_SERVER_URL + '/usuario/amigos/' + userID).toPromise()
    return res.json().map(Usuario.fromJSON)
  }

  async eliminarAmigo(idLogueado: Number, idAEliminar: Number) {
    const jsonEliminado = JSON.parse('{ "idAEliminar": ' + String(idAEliminar) + ' }');

    return this.http.put(REST_SERVER_URL + "/usuario/amigos/" + idLogueado, jsonEliminado).toPromise()
  }

  async getInvitacionesPendientes(userID: Number) {
    const res = await this.http.get(REST_SERVER_URL + '/usuario/invitaciones/' + userID).toPromise()
    return res.json().map(Invitacion.fromJSON)
  }

  async aceptarInvitacion(idLogueado: Number, idPorAceptar: Number) {
    const jsonAceptarInvitacion = JSON.parse('{ "idPorAceptar": ' + String(idPorAceptar) + ' }');

    return this.http.put(REST_SERVER_URL + "/usuario/invitaciones/aceptar/" + idLogueado, jsonAceptarInvitacion).toPromise()
  }

  async rechazarInvitacion(idLogueado: Number, idPorRechazar: Number) {
    const jsonRechazarInvitacion = JSON.parse('{ "idPorRechazar": ' + String(idPorRechazar) + ' }');

    return this.http.put(REST_SERVER_URL + "/usuario/invitaciones/rechazar/" + idLogueado, jsonRechazarInvitacion).toPromise()
  }
  // async usuarioLogueado() {
  //   const res = await this.http.get(REST_SERVER_URL + '/usuario/' + this.IDUsuarioLogueado).toPromise()
  //   return res.json().map(Usuario.fromJSON)
  // }

}

@Injectable({
  providedIn: 'root'
})
export class MockUsuarioService implements IUsuarioService {

  usuarioLogueado: Usuario


  constructor() {
    let karaDanvers = new Usuario('Kara', 'Danvers', '@kara95');
    let fernandoDodino = new Usuario('Fernando', 'Dodino', '@dodain');
    let cristianMaggiorano = new Usuario('Cristian', 'Maggiorano', '@crismagg');
    karaDanvers.tipoUsuario = "Profesional"
    karaDanvers.email = 'kara@catco.com';
    // karaDanvers.agregarAmigo(new Usuario('Timothy', 'Drake', '@theRedOne'));
    // karaDanvers.agregarAmigo(new Usuario('Catherine', 'Grant', '@catGrant'));
    // karaDanvers.agregarAmigo(new Usuario('Perry', 'White', '@whiteDP'));
    // karaDanvers.agregarAmigo(new Usuario('James', 'Gordon', '@jimG'));
    // karaDanvers.agregarAmigo(new Usuario('James', 'Olsen', '@jimmy_olsn'));
    // karaDanvers.agregarAmigo(new Usuario('Katherine', 'Kane', '@kathyKane'));
    // karaDanvers.agregarAmigo(new Usuario('Julia', 'Pennyworth', '@JuliiPen'));
    // karaDanvers.agregarAmigo(new Usuario('Jackson', 'Hyde', '@JHyde'));
    // karaDanvers.agregarAmigo(new Usuario('Maravilla', 'Martinez', '@SaliDeAhiMaravilla'));
    // karaDanvers.agregarAmigo(new Usuario('Marcelo', 'Tinelli', '@marcelotinelli'));
    // karaDanvers.agregarAmigo(new Usuario('Carolina', 'Ardohain ', '@pampitaoficial '));
    // karaDanvers.agregarAmigo(new Usuario('Sean', 'Penn', '@elmachopenn'));
    // karaDanvers.agregarAmigo(new Usuario('Jennifer', 'Lawrence', '@JSLawrence'));
    // karaDanvers.agregarAmigo(new Usuario('Carlos', 'Gardel', '@carlitosgardel'));
    // karaDanvers.agregarAmigo(new Usuario('Lady', 'Gaga', '@ladygaga'));
    // karaDanvers.agregarAmigo(cristianMaggiorano);
    // karaDanvers.agregarAmigo(fernandoDodino);
    let cumpleKara = new EventoCerrado("Cumple Kara", new Date(), new Date('2019/10/19 07:00'), new Locacion("Mi Casa"), cristianMaggiorano)
    let cumpleDodain = new EventoCerrado("Cumple Dodain", new Date('2020/10/11 23:59'), new Date('2020/10/15 22:00'), new Locacion("Lo de Dodino"), fernandoDodino)
    let salidaBoliche = new EventoCerrado("Salida a bailar", new Date('2018/10/19 00:00'), new Date('2010/10/12 06:00'), new Locacion("Soul Train"), cristianMaggiorano)
    let racingBoca = new EventoAbierto("Recital Abel Pintos", new Date('2019/3/2 19:00'), new Date('2019/3/2 21:00'), new Locacion("Luna Park"), fernandoDodino, 500)
    let casamientoMarley = new EventoAbierto("Casamiento Marley", new Date('2018/10/20'), new Date('2020/3/2 21:00'), new Locacion("Uganda"), cristianMaggiorano, 250000)
    let invitacionCumpleKara = new Invitacion(cumpleKara, 2)
    karaDanvers.invitaciones = [invitacionCumpleKara, new Invitacion(cumpleDodain, 5), new Invitacion(salidaBoliche, 10)]
    karaDanvers.aceptarInvitacion(invitacionCumpleKara)
    karaDanvers.comprarEntrada(racingBoca)
    karaDanvers.comprarEntrada(casamientoMarley)
    this.usuarioLogueado = karaDanvers
  }


}