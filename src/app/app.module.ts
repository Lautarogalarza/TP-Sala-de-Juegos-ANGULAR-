import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from './componentes/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { HttpModule } from '@angular/http';
import { IvyCarouselModule } from 'angular-responsive-carousel';



import { ErrorComponent } from './componentes/error/error.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { RuteandoModule } from './ruteando/ruteando.module';
import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';

import { JuegosComponent } from './componentes/juegos/juegos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { AgmCoreModule } from '@agm/core';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { MemoTestComponent } from './componentes/memo-test/memo-test.component';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { TaTeTiComponent } from './componentes/ta-te-ti/ta-te-ti.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';


var firebaseConfig = {
  apiKey: "AIzaSyCpLleGRM0yoP4mEIk_6iQnmz5-urTlglg",
  authDomain: "saladejuegos-c33eb.firebaseapp.com",
  databaseURL: "https://saladejuegos-c33eb.firebaseio.com",
  projectId: "saladejuegos-c33eb",
  storageBucket: "saladejuegos-c33eb.appspot.com",
  messagingSenderId: "88172521753",
  appId: "1:88172521753:web:1c039f723f456e32f63d88"
};

@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    ListadoDeResultadosComponent,
    ErrorComponent,
    PrincipalComponent,
    LoginComponent,
    AgilidadAritmeticaComponent,
    JuegosComponent,
    RegistroComponent,
    MenuCardComponent,
    CabeceraComponent,
    QuienSoyComponent,
    AnagramaComponent,
    JugadoresListadoComponent,
    PiedraPapelTijeraComponent,
    MemoTestComponent,
    AhorcadoComponent,
    TaTeTiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    RuteandoModule,
    HttpModule,
    AngularFireAuthModule,
    IvyCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
