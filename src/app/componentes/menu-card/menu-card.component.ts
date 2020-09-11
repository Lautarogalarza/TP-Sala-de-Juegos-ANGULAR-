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
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'PiedraPapelTijera':
          this.router.navigate(['/Juegos/PiedraPapelTijera']);
        break;
      case 'TaTeTi':
          this.router.navigate(['/Juegos/TaTeTi']);
        break;
        case 'Memotest':
          this.router.navigate(['/Juegos/MemoTest']);
        break;
        case 'Anagrama':
          this.router.navigate(['/Juegos/Anagrama']);
        break;
        case 'Ahorcado':
          this.router.navigate(['/Juegos/Ahorcado']);
        break;
    }
  }
}
