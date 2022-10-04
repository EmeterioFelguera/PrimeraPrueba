import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

//Array de nombre e iconos.

  juegos = [
    {
      nombre: 'Pokémon yellow',
      icono: 'alarm-outline'
    },
    
    {
      nombre: 'Mega Man X',
      icono: 'backspace-outline'
    },
  
    {
      nombre: 'The Legend of Zelda Man X',
      icono: 'backspace-outline'
    },
  
    {
      nombre: 'Pac-ManX',
      icono: 'backspace-outline'
    },
  ]

  mostrar = false;

}
