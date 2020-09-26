import { Component, OnInit } from '@angular/core';
import { ListadosService } from '../../servicios/listados.service'

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.scss']
})
export class PiedraPapelTijeraComponent implements OnInit {

  mensaje: string;
  intentosJugador: number = 0;
  intentosMaquina: number = 0;
  jugadaMaquina: string;
  jugadaJugador: string;
  visibleJuego: boolean;
  visibleResultado: boolean = true;
  dashabilitado: boolean;

  constructor(private listadoService: ListadosService) { }

  ngOnInit(): void {
  }


  Juego(jugada: number) {

    switch (jugada) {
      case 1:
        this.jugadaJugador = "Piedra"
        break;

      case 2:
        this.jugadaJugador = "Papel"
        break;

      case 3:
        this.jugadaJugador = "Tijera"
        break;

    }

    this.JuegoMaquina();

  }

  JuegoMaquina() {

    switch (Math.floor(Math.random() * 3 + 1)) {
      case 1:
        this.jugadaMaquina = "Piedra"
        break;

      case 2:
        this.jugadaMaquina = "Papel"
        break;

      case 3:
        this.jugadaMaquina = "Tijera"
        break;

    }

    this.mensaje = this.jugadaMaquina;

    this.Ganador();

  }


  Ganador() {

    if (this.jugadaJugador == this.jugadaMaquina) {

      console.log("Empate");

    }
    else {

      switch (this.jugadaJugador) {
        case "Piedra":
          if (this.jugadaMaquina == "Tijera") {
            console.log("Ganaste")
            this.intentosJugador++;

          } else {
            console.log("Perdiste")
            this.intentosMaquina++;
          }

          this.VerificarGanador();
          break;

        case "Papel":
          if (this.jugadaMaquina == "Piedra") {
            console.log("Ganaste")
            this.intentosJugador++;

          } else {
            console.log("Perdiste")
            this.intentosMaquina++;
          }
          this.VerificarGanador();
          break;


        case "Tijera":
          if (this.jugadaMaquina == "Papel") {
            console.log("Ganaste")
            this.intentosJugador++;

          } else {
            console.log("Perdiste")
            this.intentosMaquina++;
          }
          this.VerificarGanador();
          break;

      }
    }


  }

  VerificarGanador() {

    if (this.intentosJugador == 3) {
      this.dashabilitado = true;

      setTimeout(() => {
        this.mensaje = '¡FELICITACIONES, SOS MEJOR QUE LA MAQUINA!';
        this.visibleJuego = true;
        this.visibleResultado = false;
        this.dashabilitado = false;
        this.listadoService.JugadorGano("pidraPapelTijera");
      }, 600);

    }

    else if (this.intentosMaquina == 3) {
      this.dashabilitado = true;
      setTimeout(() => {
        this.mensaje = 'PERDISTE, LA MAQUINA ES MEJOR QUE VOS!';
        this.visibleJuego = true;
        this.visibleResultado = false;
        this.dashabilitado = false;
        this.listadoService.JugadorPerdio("pidraPapelTijera");

      }, 600);
    }

  }



  reiniciar() {
    this.intentosJugador = 0;
    this.intentosMaquina = 0;
    this.mensaje = null;

    this.visibleJuego = false;
    this.visibleResultado = true;
    this.jugadaMaquina = null;
    this.jugadaJugador = null;
  }

}






