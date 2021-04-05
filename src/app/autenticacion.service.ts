import { Injectable } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  
  constructor(private fireauth : AngularFireAuth) { }


  signup(nombre :string, email : string, password : string ) {
   
    console.log("datos", nombre,email,password);
    
        this.fireauth
        .createUserWithEmailAndPassword(email,password)
          .then(res => {
            if (res.user) {
              console.log("usuario creado",res.user);
           //  this.updateProfile();
            }
          })
          .catch(err => {
            console.log(`login failed ${err}`);
           // this.error = err.message;
          });
}


signin(email : string, password : string){
  this.fireauth
  .signInWithEmailAndPassword(email,password)
  .then(res => {
    if (res.user) {
      console.log(res.user);
      localStorage.setItem("usuario",res.user.uid)
     // this.router.navigate(['/home']);
    }
  })
  .catch(err => {
    console.log(`login failed ${err}`);
    //this.error = err.message;
  });

}

}
