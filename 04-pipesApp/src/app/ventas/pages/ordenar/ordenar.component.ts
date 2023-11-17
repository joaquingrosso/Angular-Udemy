import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {


  enMayus: boolean = true;

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true, 
      color: 0
    },
    {
      nombre: 'Batman',
      vuela: false, 
      color: 1
    },
    {
      nombre: 'Linterna Verde',
      vuela: true, 
      color: 3
    },
    {
      nombre: 'Spiderman',
      vuela: false, 
      color: 0
    },
    {
      nombre: 'Aquaman',
      vuela: false, 
      color: 2
    }
  ];

  ordenarPor: string = 'sin valor';

  cambiarMayusculas(){
    return ( this.enMayus ) ? this.enMayus=false : this.enMayus=true;
  };

  cambiarOrden(orden: string){
    this.ordenarPor = orden;
  }

}
