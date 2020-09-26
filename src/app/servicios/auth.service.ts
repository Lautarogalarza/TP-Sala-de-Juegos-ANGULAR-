import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth) { }

  login(email: string, password: string) {

    return new Promise((resolve, rejected) => {
      this.AFauth.signInWithEmailAndPassword(email, password).then(response => {
        resolve(response);
      }, (error: any) => {
        console.log(error);
        switch (error.code) {
          case "auth/user-not-found":
            rejected("El usuario no existe");
            break;
          case "auth/invalid-email":
            rejected("mail invalido");
            break;
          case "auth/wrong-password":
            rejected("contrasenia incorrecta");
            break;
          default:
            rejected("ERROR");
            break;
        }
      });

    });

  }

  register(email: string, password: string) {

    return new Promise<any>((resolve, rejected) => {
      this.AFauth.createUserWithEmailAndPassword(email, password).then((response: any) => {
        resolve(response);
      }, (error: any) => {
        switch (error.code) {
          case "auth/weak-password":
            rejected("contrasena muy corta,minimo 6 caracteres");
            break;
          case "auth/invalid-email":
            rejected("mail invalido");
            break;
          case "auth/wrong-password":
            rejected("contrasenia invalida");
            break;
          case "auth/email-already-in-use":
            rejected("El correo ya se encuentra tomado");
            break;
          default:
            rejected("ERROR");
            break;
        }
      });
    });
  }

  getCurrentUser() {
    return this.AFauth.currentUser;
  }

  logOutCurrentUser() {
    this.AFauth.signOut();
  }



}
