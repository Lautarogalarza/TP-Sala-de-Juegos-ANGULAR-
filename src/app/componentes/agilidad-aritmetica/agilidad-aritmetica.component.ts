import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListadosService } from '../../servicios/listados.service'
import { Subscription } from "rxjs";
import { timer } from 'rxjs';
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {

  usuariosGeneral;
  gano: boolean;
  usuariosAgilidad;
  usuarioLogueado;
  resultadoIngresado: number;
  numeroUno: number;
  numeroDos: number;
  operador: string;
  operadoradores: string[] = ["-", "+", "%", "*"];
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor: any;

  private subscription: Subscription;

  ngOnInit() {
  }
  constructor(private listadoService: ListadosService) {


    this.juegoParado();
  }

  NuevoJuego() {

    this.generarCalculo();
    this.ocultarVerificar = false;
    this.repetidor = setInterval(() => {

      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if (this.Tiempo == 0) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar = true;
        this.Tiempo = 10;
      }
    }, 900);
  }

  verificar() {
    this.ocultarVerificar = false;
    clearInterval(this.repetidor);

    if (this.realizarCalculo()) {
      this.mostrarMensaje(true);
    }
    else {
      this.mostrarMensaje(false)
    }
  }

  generarCalculo() {
    let i = Math.floor(Math.random() * (this.operadoradores.length - 0) + 0);
    this.operador = this.operadoradores[i];
    this.numeroUno = Math.floor(Math.random() * (10 - 1) + 1);
    this.numeroDos = Math.floor(Math.random() * (10 - 1) + 1);

  }

  realizarCalculo(): boolean {
    let retorno = false
    let resultado;

    switch (this.operador) {
      case "%":

        resultado = (this.numeroUno % this.numeroDos);
        if (resultado == this.resultadoIngresado) {
          retorno = true;
        }
        break;

      case "*":

        resultado = (this.numeroUno * this.numeroDos);
        if (resultado == this.resultadoIngresado) {
          retorno = true;
        }
        break;

      case "+":

        resultado = (this.numeroUno + this.numeroDos);
        if (resultado == this.resultadoIngresado) {
          retorno = true;
        }
        break;

      case "-":

        resultado = (this.numeroUno - this.numeroDos);
        if (resultado == this.resultadoIngresado) {
          retorno = true;
        }
        break;

    }

    return retorno;
  }

  mostrarMensaje(gano: boolean) {
    if (gano) {
      this.gano = true;
      document.getElementById("mensajeAritmetica").style.background = "rgb(40, 216, 63)"
      $("#mensajeAritmetica").text("¡ADIVINASTE,GENIO!");
      this.listadoService.JugadorGano("agilidadAritmetica");
    }
    else {
      this.gano = false;
      document.getElementById("mensajeAritmetica").style.background = "rgb(204, 40, 40)"
      $("#mensajeAritmetica").text("¡ERROR!, NO SOS TAN INTELIGENTE");
      this.listadoService.JugadorPerdio("agilidadAritmetica")
    }

    this.fadeIn();

  }

  fadeIn() {
    $("#mensajeAritmetica").fadeIn();
    setTimeout(() => {
      $("#mensajeAritmetica").fadeOut();
      this.reiniciarVariables();
      this.juegoParado();
    }, 1500);
  }

  reiniciarVariables() {
    this.operador = null;
    this.numeroDos = null;
    this.numeroUno = null;
    this.resultadoIngresado = null;
  }

  juegoParado() {
    this.ocultarVerificar = true;
    this.Tiempo = 10;
  }



  modificarExistente(usuario) {
    if (this.gano == true) {
      usuario.gano++;

    }
    else if (this.gano == false) {
      usuario.perdio++;

    }
  }

  modificarUsuarioPuntaje(usuario) {
    if (this.gano == true) {
      usuario.gano++;

    }
    else {
      usuario.perdio++;

    }
  }


}
