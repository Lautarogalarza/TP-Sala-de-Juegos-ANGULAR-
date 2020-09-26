import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {

  }


  Juego(tipo: string) {
    switch (tipo) {
      case 'adivina':
        this.router.navigate(['/juegos/adivina']);
        break;
      case 'agilidad':
        this.router.navigate(['/juegos/agilidad']);
        break;
      case 'piedraPapelTijera':
        this.router.navigate(['/juegos/piedraPapelTijera']);
        break;
      case 'tateti':
        this.router.navigate(['/juegos/tateti']);
        break;
      case 'memotest':
        this.router.navigate(['/juegos/memotest']);
        break;
      case 'anagrama':
        this.router.navigate(['/juegos/anagrama']);
        break;
      case 'ahorcado':
        this.router.navigate(['/juegos/ahorcado']);
        break;
    }
  }
}
