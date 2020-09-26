import { Component, OnInit } from '@angular/core';
import { ListadosService } from '../../servicios/listados.service'

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent implements OnInit {

  usuariosGeneral;
  usuariosAhorcado;
  usuarioLogueado;
  letras = ["A", "B", "C", "D", "E", "F", "G", "H",
    "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"];

  palabras = ["aceite", "dinosaurio", "programador", "sorprendente", "admirable", "capacitor", "transformador"
    , "teclado", "pantalla", "carta", "doctor", "musica", "jazmin", "riqueza"
    , "salchicha", "colorada", "mayonesa", "cafe"];

  gano: boolean;
  palabraParaAdivinar: string;
  palabraAdivinadaHastaAhora: string = "";
  letrasErradas: string = "";
  numeroFallos: number = 0;
  visibleJuego: boolean = false;
  visibleResultado: boolean = true;
  mensaje: string
  letraError: boolean = false;

  constructor(private listadoService: ListadosService) {

  }

  ngOnInit(): void {
    this.generarPalabra();
  }

  generarPalabra() {
    let random = Math.floor(Math.random() * (this.palabras.length - 0) + 0);
    this.palabraParaAdivinar = this.palabras[random];
    for (let i = 0; i < this.palabraParaAdivinar.length; i++) {
      this.palabraAdivinadaHastaAhora += "_";
    }
  }

  hastaElMomento(letra: string) {
    if (this.acertoLetra(letra)) {
      if (this.corroborarVictoria()) {
        this.mostrarMensaje()
      }
    }
    else if (this.numeroFallos == 6) {
      this.mostrarMensaje();
    }
  }

  acertoLetra(letra: string): boolean {
    let acerto = false;

    for (let i = 0; i < this.palabraParaAdivinar.length; i++) {
      if (this.palabraParaAdivinar[i] == letra.toLocaleLowerCase()) {
        this.palabraAdivinadaHastaAhora = this.palabraAdivinadaHastaAhora.substr(0, i) + letra +
          this.palabraAdivinadaHastaAhora.substr(i + 1);
        acerto = true;
      }
    }

    if (!acerto) {
      this.letrasErradas += letra;
      this.numeroFallos++;
      this.letraError = true;

    }

    return acerto;
  }

  corroborarVictoria(): boolean {
    this.gano = true;

    for (let i = 0; i < this.palabraParaAdivinar.length; i++) {
      if (this.palabraAdivinadaHastaAhora[i] == "_") {
        this.gano = false;
      }
    }

    if (this.gano) {
      this.mensaje = "GANASTE, SOS UN GENIO!!!";
    } else {
      let palabra = this.palabraParaAdivinar.toUpperCase()
      this.mensaje = "PERDISTE LA PALABRA ERA " + palabra + ", MEJOR SUERTE LA PROXIMA";

    }

    return this.gano;
  }

  recargar() {

    if (this.mensaje == "GANASTE, SOS UN GENIO!!!") {
      this.listadoService.JugadorGano("ahorcado");

    } else {

      this.listadoService.JugadorPerdio("ahorcado");
    }


    this.visibleJuego = false;
    this.visibleResultado = true;
    this.letrasErradas = "";
    this.numeroFallos = 0;
    this.palabraAdivinadaHastaAhora = "";
    this.palabraParaAdivinar = "";
    this.generarPalabra();
  }

  mostrarMensaje() {

    setTimeout(() => {
      this.visibleJuego = true;
      this.visibleResultado = false;
    }, 500);

  }

  verificarNuevoAhorcado() {
    let flag = false;

    for (let usu of this.usuariosAhorcado) {
      if (usu.usuario == this.usuarioLogueado) {
        flag = true;
        break;
      }
    }

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
