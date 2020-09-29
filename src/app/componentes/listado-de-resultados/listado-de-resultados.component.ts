
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {

  listado: any
  juegos: Observable<any[]>;
  listaJuegos: any[];


  constructor(private context: AngularFireDatabase) {

    this.juegos = this.context.list('juegos').valueChanges();
    this.juegos.subscribe(juegos => this.listaJuegos = juegos, error => console.log(error));

  }

  ngOnInit() {

  }


}
