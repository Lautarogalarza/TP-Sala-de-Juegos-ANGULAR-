import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { AuthService } from "../../servicios/auth.service";

import { Subscription } from "rxjs";
import { timer } from "rxjs";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  private subscription: Subscription;
  correo = "";
  contrasenia = "";
  progreso: number;
  mensaje: string;
  progresoMensaje = "esperando...";
  logeando = true;
  ProgresoDeAncho: string;

  clase = "progress-bar progress-bar-info progress-bar-striped ";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.progreso = 0;
    this.ProgresoDeAncho = "0%";
  }

  ngOnInit() {}

  Cargar() {
    this.correo = "admin@admin.com";
    this.contrasenia = "123456";
  }

  Login() {
    this.authService
      .login(this.correo, this.contrasenia)
      .then((response) => {
        this.router.navigate(["/principal"]);
      })
      .catch((error) => (this.mensaje = error));
  }


}
