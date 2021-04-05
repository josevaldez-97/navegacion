import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../autenticacion.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  nombre :string;
  email : string;
  password : string;
  
  constructor(private autenticacionService: AutenticacionService ) { }

  ngOnInit() {
  }

  loging(){
    this.autenticacionService.signup(this.nombre, this.email, this.password);

  };


  }


