import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memo-test',
  templateUrl: './memo-test.component.html',
  styleUrls: ['./memo-test.component.css']
})
export class MemoTestComponent implements OnInit {

  
  
  
  comenzar:boolean = false;
  cuadrados = ["0","0","1","1","2","2","3","3","4","4","5","5"];
  mensaje:string;
  mostrarMensaje:boolean = false;
  mostrar:boolean[] = new Array(12);
  tarjetaA = null;
  tarjetaB = null;
  indexA:number;
  indexB:number;
  intentos:number;
                      constructor() {
                    
                      }



  comenzarJuego() {
    this.comenzar = true;
    //this.inicializarMostrar(); 
    this.cuadrados.sort(function (a, b) { return 0.5 - Math.random()});
    this.intentos = 15;
   this.ocultar();
  }

  inicializarMostrar() {
    for(let i = 0; i < 12; i++) {
      this.mostrar[i] = true;
    }
  }

  jugar(casillero:number) {
    if(!this.mostrar[casillero]) {
      this.mostrar[casillero] = true;
      setTimeout(() => {
        if(this.tarjetaA == null) {
          this.tarjetaA = this.cuadrados[casillero];
          this.indexA = casillero;
        } else {
          this.tarjetaB = this.cuadrados[casillero];
          this.indexB = casillero;
          if(this.tarjetaA == this.tarjetaB) {
            this.verficiarGanador();
          } else {
            this.intentos--;
            if(this.intentos < 0) {
              this.jugadorPerdio();
            } else {
              this.mostrar[this.indexA] = false;
              this.mostrar[this.indexB] = false;
            }
           
          }
          this.tarjetaA = null;
          this.tarjetaB = null;
        }
      }, 500);
    }
  }

  ocultar() {
    for(let i = 0; i < 12; i++) {
      this.mostrar[i] = false;
    }
  }

  verficiarGanador() {
    let contador:number = 0;
    for(let i = 0; i < 12; i++) {
      if(this.mostrar[i]) {
        contador++;
      }
    }
    if(contador == 12) {
      this.jugadorGano();
    }
  }

  jugadorGano() {
    this.mostrarMensaje = true;
    this.mensaje = "GANASTE!";
    setTimeout(() => this.reiniciar(), 4000);
  }

  jugadorPerdio() {
    this.mostrarMensaje = true;
    this.mensaje = "PERDISTE";
    setTimeout(() => this.reiniciar(), 4000);
  }

  reiniciar() {
    this.mostrarMensaje = false;
    this.comenzar = false;
    this.inicializarMostrar(); 
  }


  
  ngOnInit(): void {
  }
  
  
  

}
