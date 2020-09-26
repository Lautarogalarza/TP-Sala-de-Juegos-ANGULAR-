import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  cambiarRuta() {


    switch (this.route.url) {
      case "/listado":
        this.route.navigate(['/principal']);
        break;
        case "/jugadores":
        this.route.navigate(['/principal']);
        break;
      case "/principal":
        this.route.navigate(['']);
        break;
      case "/quienSoy":
        this.route.navigate(['/principal']);
        break;
      case "/juegos":
        this.route.navigate(['/principal']);
        break;
      case "/juegos/adivina":
        this.route.navigate(['/juegos']);
        break;
      case "/juegos/piedraPapelTijera":
        this.route.navigate(['/juegos']);
        break;
      case "/juegos/agilidad":
        this.route.navigate(['/juegos']);
        break;
      case "/juegos/tateti":
        this.route.navigate(['/juegos']);
        break;
      case "/juegos/memotest":
        this.route.navigate(['/juegos']);
        break;
      case "/juegos/anagrama":
        this.route.navigate(['/juegos']);
        break;
      case "/juegos/ahorcado":
        this.route.navigate(['/juegos']);
        break;

      default:
        break;
    }

  }

}
