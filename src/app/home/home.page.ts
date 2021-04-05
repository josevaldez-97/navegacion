import { Component } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Pagina } from '../pagina';
//import { Pagina } from '../pagina';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  paginaEditando: Pagina;  

  constructor(private firestoreService: FirestoreService) {
  // Crear una tarea vacía
   this.paginaEditando = {} as Pagina;
  
    this.obtenerListaPagina();
 } 
  
  clicBotonInsertar() {
    this.firestoreService.insertar("pagina", this.paginaEditando).then(() => {
      console.log('Tarea creada correctamente!');
      this.paginaEditando= {} as Pagina;
    }, (error) => {
      console.error(error);
    });
  }

  arrayColeccionPagina: any = [{
    id: "",
    data: {} as Pagina
   }];

  obtenerListaPagina(){
    this.firestoreService.consultar("pagina").subscribe((resultadoConsultaPagina) => {
      this.arrayColeccionPagina = [];
      resultadoConsultaPagina.forEach((datospagina: any) => {
        this.arrayColeccionPagina.push({
          id: datospagina.payload.doc.id,
          data: datospagina.payload.doc.data()
        });
      })
    });
  }

  idTareaSelec: string;

  selecTarea(tareaSelec) {
    console.log("Tarea seleccionada: ");
    console.log(tareaSelec);
    this.idTareaSelec = tareaSelec.id;
    this.paginaEditando.titulo = tareaSelec.data.titulo;
    this.paginaEditando.descripcion = tareaSelec.data.descripcion;
  }

  clicBotonBorrar() {
    this.firestoreService.borrar("pagina", this.idTareaSelec).then(() => {
      // Actualizar la lista completa
      this.obtenerListaPagina();
      // Limpiar datos de pantalla
      this.paginaEditando = {} as Pagina;
    })
  }

  clicBotonModificar() {
    this.firestoreService.actualizar("pagina", this.idTareaSelec, this.paginaEditando).then(() => {
      // Actualizar la lista completa
      this.obtenerListaPagina();
      // Limpiar datos de pantalla
      this.paginaEditando = {} as Pagina;
    })
  }









  


  }


 


