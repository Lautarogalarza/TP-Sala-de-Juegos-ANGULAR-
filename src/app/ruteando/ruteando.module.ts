import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importo del module principal
import { RouterModule, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from '../componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from '../componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from '../componentes/login/login.component';
import { ErrorComponent } from '../componentes/error/error.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from '../componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { JuegosComponent } from '../componentes/juegos/juegos.component';
import { RegistroComponent } from '../componentes/registro/registro.component';
import { MenuCardComponent } from '../componentes/menu-card/menu-card.component';
import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from '../componentes/quien-soy/quien-soy.component'
import { JugadoresListadoComponent } from '../componentes/jugadores-listado/jugadores-listado.component';
import { AnagramaComponent } from "../componentes/anagrama/anagrama.component";
import { TaTeTiComponent } from "../componentes/ta-te-ti/ta-te-ti.component";
import { MemoTestComponent } from "../componentes/memo-test/memo-test.component";
import { PiedraPapelTijeraComponent } from "../componentes/piedra-papel-tijera/piedra-papel-tijera.component";
import { AhorcadoComponent } from "../componentes/ahorcado/ahorcado.component";



// declaro donde quiero que se dirija
const MiRuteo = [
  { path: 'jugadores', component: JugadoresListadoComponent },
  { path: '', component: LoginComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'quienSoy', component: QuienSoyComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'listado', component: ListadoDeResultadosComponent },

  {
    path: 'juegos',
    component: JuegosComponent,
    children:
      [{ path: '', component: MenuCardComponent },
      { path: 'adivina', component: AdivinaElNumeroComponent },
      { path: 'anagrama', component: AnagramaComponent },
      { path: 'tateti', component: TaTeTiComponent },
      { path: 'memotest', component: MemoTestComponent },
      { path: 'piedraPapelTijera', component: PiedraPapelTijeraComponent },
      { path: 'ahorcado', component: AhorcadoComponent },
      { path: 'agilidad', component: AgilidadAritmeticaComponent }]
  },
  { path: '**', component: ErrorComponent },
  { path: 'error', component: ErrorComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
