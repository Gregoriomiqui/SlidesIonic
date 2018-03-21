import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slides=[
    { 
      titulo:"HTML 5",
      texto:"HTML5 (HyperText Markup Language, versión 5) es la quita version",
      imagen:"../../assets/html5.png"
    },
    {
      titulo:"CSS 3",
      texto:"Hojas de estilo en cascada",
      imagen:"../../assets/css3.png"},
    {
      titulo:"JavaScript",
      texto:"JavaScrit (abreviado comúnmente JS) es un lenguaje de programacion",
     imagen:"../../assets/js.png"
    }
  ]


 constructor(public navCtrl: NavController) {  }

}
