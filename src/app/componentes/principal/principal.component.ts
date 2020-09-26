import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../servicios/auth.service'

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {


  constructor(private authService: AuthService) {

  }

  ngOnInit() {
  }

  User() {

    this.authService.getCurrentUser().then((response: any) => {
      console.log(response);
    });
  }
}
