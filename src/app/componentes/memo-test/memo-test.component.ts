import { Component, OnInit } from '@angular/core';
import { ListadosService } from '../../servicios/listados.service'
@Component({
  selector: 'app-memo-test',
  templateUrl: './memo-test.component.html',
  styleUrls: ['./memo-test.component.css']
})
export class MemoTestComponent implements OnInit {

  comenzar: boolean = false;
  cuadrados = ["0", "0", "1", "1", "2", "2", "3", "3", "4", "4", "5", "5"];
  mensaje: string;
  mostrarMensaje: boolean = false;
  mostrar: boolean[] = new Array(12);
  tarjetaA = null;
  tarjetaB = null;
  indexA: number;
  indexB: number;
  intentos: number;
  escondido: boolean = true;
  constructor(private listadoService: ListadosService) {
    this.comenzar = true;
    this.cuadrados.sort(function (a, b) { return 0.5 - Math.random() });
    this.intentos = 15;
    this.ocultar();
  }

  ngOnInit(): void {
  }

  reiniciarJuego() {
    this.comenzar = true;
    this.cuadrados.sort(function (a, b) { return 0.5 - Math.random() });
    this.intentos = 15;
    this.ocultar();
  }

  inicializarMostrar() {
    for (let i = 0; i < 12; i++) {
      this.mostrar[i] = true;
    }
  }

  jugar(casillero: number) {
    if (!this.mostrar[casillero]) {
      this.mostrar[casillero] = true;
      setTimeout(() => {
        if (this.tarjetaA == null) {
          this.tarjetaA = this.cuadrados[casillero];
          this.indexA = casillero;
        } else {
          this.tarjetaB = this.cuadrados[casillero];
          this.indexB = casillero;
          if (this.tarjetaA == this.tarjetaB) {
            this.verficiarGanador();
          } else {
            this.intentos--;
            if (this.intentos < 0) {
              this.jugadorPerdio();
            } else {
              this.mostrar[this.indexA] = false;
              this.mostrar[this.indexB] = false;
            }

          }
          this.tarjetaA = null;
          this.tarjetaB = null;
        }
      }, 1000);
    }
  }

  ocultar() {
    for (let i = 0; i < 12; i++) {
      this.mostrar[i] = false;
    }
  }

  verficiarGanador() {
    let contador: number = 0;
    for (let i = 0; i < 12; i++) {
      if (this.mostrar[i]) {
        contador++;
      }
    }
    if (contador == 12) {
      this.jugadorGano();
    }
  }

  jugadorGano() {
    this.mostrarMensaje = true;
    this.mensaje = "GANASTE!!! " + "TU PUNTAJE FUE DE: " + (15 - this.intentos);
    this.listadoService.JugadorGano("memotest");

    setTimeout(() => this.reiniciar(), 3000);
  }

  jugadorPerdio() {
    this.mostrarMensaje = true;
    this.mensaje = "PERDISTE!!";
    this.listadoService.JugadorPerdio("memotest");
    console.log(this.intentos);

    setTimeout(() => this.reiniciar(), 3000);
  }

  reiniciar() {
    this.mostrarMensaje = false;
    this.comenzar = false;
    this.escondido = false;
    this.inicializarMostrar();
  }

}
