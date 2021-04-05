import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email : string;
  password : string;

  constructor(private autenticacionService: AutenticacionService) { }

  ngOnInit() {
  }


  loguearme(){
    this.autenticacionService.signin( this.email, this.password);

  }
}
