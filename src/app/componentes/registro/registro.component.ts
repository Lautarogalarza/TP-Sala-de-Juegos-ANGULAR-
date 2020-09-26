import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from "../../servicios/auth.service";
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  correo: string;
  contraseia: string;
  contraseniaOtraVez: string;
  mensaje: string;


  constructor(private authService: AuthService, private router: Router, private context: AngularFireDatabase) {
    //this.usuarios = context.list('usuarios').valueChanges();
   // this.usuarios.subscribe(usuarios => this.listaUsuarios = usuarios, error => console.log(error));

  }

  ngOnInit() {
  }

  Register() {

    if ((this.contraseia == null || this.contraseia == "") || (this.contraseniaOtraVez == null || this.contraseniaOtraVez == "") || (this.correo == null || this.correo == "")) {
      this.mensaje = "Datos vacios";
    }
    else {

      if (this.contraseia == this.contraseniaOtraVez) {
        this.authService.register(this.correo, this.contraseia).then(response => {

            this.authService.getCurrentUser().then((response: any) => {
            this.context.list('usuarios').set(response.uid, { correo:this.correo, gano: 0, perdio: 0, id: response.uid });
            this.router.navigate(['/principal']);
          });

        }).catch(error => this.mensaje = error);
        
      } else {
        this.mensaje = "Las contraseñas no son iguales";
      }
    }
  }

}

