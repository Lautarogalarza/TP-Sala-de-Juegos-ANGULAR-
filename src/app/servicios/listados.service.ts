import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListadosService {
  usuarios: Observable<any[]>;
  listaUsuarios: any[];
  listaJuegos: any[];
  usuariosJuegos: Observable<any[]>;
  auxUser: any;
  auxJuego: any;
  keyJuego: any;
  puntajeGano: number;
  puntajeUser: number;
  puntajePerdio: number;

  constructor(private context: AngularFireDatabase, private authservice: AuthService) {
    this.usuarios = this.context.list('usuarios').valueChanges();
    this.usuarios.subscribe(usuarios => this.listaUsuarios = usuarios, error => console.log(error));
    this.usuariosJuegos = this.context.list('juegos').valueChanges();
    this.usuariosJuegos.subscribe(juegos => this.listaJuegos = juegos, error => console.log(error));
  }

  JugadorGano(juego: string) {
    this.authservice.getCurrentUser().then((response: any) => {
      this.auxUser = this.listaUsuarios.filter(u => u.id == response.uid);
      this.auxJuego = this.listaJuegos.filter(u => u.id == this.auxUser[0].id + juego);
      this.auxJuego.length == 0 ? (this.puntajeGano = 1) && (this.puntajePerdio = 0) : (this.puntajeGano = this.auxJuego[0].gano + 1) && (this.puntajePerdio = this.auxJuego[0].perdio);
      this.keyJuego = this.auxUser[0].id + juego;
      this.puntajeUser = this.auxUser[0].gano + 1;
      this.context.list('usuarios').set(this.auxUser[0].id, { correo: this.auxUser[0].correo, gano: this.puntajeUser, perdio: this.auxUser[0].perdio, id: this.auxUser[0].id });
      this.context.list('juegos').set(this.keyJuego, { correo: this.auxUser[0].correo, juego: juego, gano: this.puntajeGano, perdio: this.puntajePerdio, id: this.keyJuego });
    });
  }

  JugadorPerdio(juego: string) {
    this.authservice.getCurrentUser().then((response: any) => {
      this.auxUser = this.listaUsuarios.filter(u => u.id == response.uid);
      this.auxJuego = this.listaJuegos.filter(u => u.id == this.auxUser[0].id + juego);
      this.auxJuego.length == 0 ? (this.puntajePerdio = 1) && (this.puntajeGano = 0) : (this.puntajePerdio = this.auxJuego[0].perdio + 1) && (this.puntajeGano = this.auxJuego[0].gano);
      this.keyJuego = this.auxUser[0].id + juego;
      this.puntajeUser = this.auxUser[0].perdio + 1;
      console.log(this.puntajePerdio);
      this.context.list('usuarios').set(this.auxUser[0].id, { correo: this.auxUser[0].correo, gano: this.auxUser[0].gano, perdio: this.puntajeUser, id: this.auxUser[0].id });
      this.context.list('juegos').set(this.keyJuego, { correo: this.auxUser[0].correo, juego: juego, gano: this.puntajeGano, perdio: this.puntajePerdio, id: this.keyJuego });
    });
  }
}