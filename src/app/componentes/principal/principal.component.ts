import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  styles: [`
    /*/deep/ .carousel-control-prev-icon {
     /* background-color:black;*/
     /* color:red;*/
    /* background-image:url("../../../assets/imagenes/prev.png");
     width:20%;
     height:20%;*/
    }*/
  `]
})
export class PrincipalComponent implements OnInit {
  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };


  showNavigationArrows = true;
  showNavigationIndicators = true;
  pauseOnHover = true;




  constructor() {


  }



  ngOnInit() {
  }



}
