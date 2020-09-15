import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.scss']
})
export class AnagramaComponent implements OnInit {



  usuariosGeneral
  palabraIngresada : string = "";
  palabraAdivinar: string;
  palabras:string[] = ['habian','usted','estados','hizo','nadie','paises','horas','posible','tarde','ley','importante',
  'guerra','desarrollo','proceso','realidad','sentido','lado','cambio','mano','eran','estar','numero','rey','correr','repetir','escuela',
  'matematica','genio','padrino', 'barco','pelota', 'hermoso', 'cambio', 'realidad', 'comenzar', 'teclado', 'monarca'];
  comenzado : boolean = false;

  gano: boolean;
  usuariosAnagrama;
  usuarioLogueado;

  constructor() { }

  ngOnInit() {

  }

  comenzar()
  {
    this.comenzado = true;
    let random = Math.floor(Math.random() * (this.palabras.length - 0) + 0);
    this.palabraAdivinar = this.palabras[random];
    this.desordenarPalabra()
  }


  desordenarPalabra()
  {
    
    let palabra = this.palabraAdivinar;
    let resultado = "";
    let zz,azar;

    for (zz=palabra.length ;zz>=1;zz--){
        azar = (Math.random()* zz + 1) ;
        resultado = resultado + palabra.substring(azar-1,azar);
        palabra =  palabra.substring(0,azar-1)+palabra.substring(azar,zz);
    }

    $("#palabraAnagrama").text(resultado);
  }

  verificar()
  {
     if(this.palabraIngresada.toLocaleLowerCase() == this.palabraAdivinar)
     {
        this.mostrarMensaje(true, "¡ERA ESA! GENIO...");
        this.gano = true;
     }
     else
     {
        this.mostrarMensaje(false, "¡ERROR! ERA " +this.palabraAdivinar);
        this.gano = false;
     }

     this.cambiarResultadoBD();
     this.cambiarResultadoUsuario();
  }

  mostrarMensaje(gano : boolean, mensaje : string)
  {
    let elemento = document.getElementById("mensajeAnagrama");

    if(gano)
    {
      elemento.style.color = "rgb(39, 185, 26)";
      $("#mensajeAnagrama").text(mensaje);
    }
    else
    {
      elemento.style.color = "rgb(197, 30, 30)";
      $("#mensajeAnagrama").text(mensaje);
    }

    setTimeout(() => {
      this.reiniciarJuego();
    },2000);
  }

  reiniciarJuego()
  {
    $("#palabraAnagrama").text("HAGA CLICK PARA COMENZAR");
    $("#mensajeAnagrama").text("");
    this.comenzado = false;
    this.palabraAdivinar = "";
    this.palabraIngresada = "";
  }

  verificarNuevoAhorcado()
  {
    let flag = false;

    for(let usu of this.usuariosAnagrama)
    {
      if(usu.usuario == this.usuarioLogueado)
      {
        flag = true;
        break;
      }
    }

    if(!flag)
    {

    }
  }

  cambiarResultadoBD()
  {
    let flag = false; 

    for(let usu of this.usuariosAnagrama)
    {
      if(usu.usuario == this.usuarioLogueado)
      {
        this.modificarExistente(usu);
        break;
      }
    }
  }

  cambiarResultadoUsuario()
  {
    let flag = false; 

    for(let usu of this.usuariosGeneral)
    {
      if(usu.nombre == this.usuarioLogueado)
      {
        this.modificarUsuarioPuntaje(usu)
        break;
      }
    }
  }

  modificarExistente(usuario)
  {
    if(this.gano == true)
    {
      usuario.gano++;

    }
    else if(this.gano == false)
    {
      usuario.perdio++;

    }
  } 

  modificarUsuarioPuntaje(usuario)
  { 
    if(this.gano == true)
    {
      usuario.gano++;

    }
    else
    {
      usuario.perdio++;

    }
  }

}
