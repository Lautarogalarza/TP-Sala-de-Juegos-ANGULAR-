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
      case "/Listado":
        this.route.navigate(['/Principal']);
        break;
        case "/Jugadores":
        this.route.navigate(['/Principal']);
        break;
      case "/Principal":
        this.route.navigate(['']);
        break;
      case "/QuienSoy":
        this.route.navigate(['/Principal']);
        break;
      case "/Juegos":
        this.route.navigate(['/Principal']);
        break;
      case "/Juegos/Adivina":
        this.route.navigate(['/Juegos']);
        break;
      case "/Juegos/PiedraPapelTijera":
        this.route.navigate(['/Juegos']);
        break;
      case "/Juegos/Agilidad":
        this.route.navigate(['/Juegos']);
        break;
      case "/Juegos/TaTeTi":
        this.route.navigate(['/Juegos']);
        break;
      case "/Juegos/MemoTest":
        this.route.navigate(['/Juegos']);
        break;
      case "/Juegos/Anagrama":
        this.route.navigate(['/Juegos']);
        break;
      case "/Juegos/Ahorcado":
        this.route.navigate(['/Juegos']);
        break;

      default:
        break;
    }

  }

}
