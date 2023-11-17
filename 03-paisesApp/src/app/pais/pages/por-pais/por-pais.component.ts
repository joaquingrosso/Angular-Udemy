import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  
  constructor( private paisService: PaisService ) {
    
    this.paisService.buscarPais( this.termino ) //se envia el termino vacio
      .subscribe( (paises) => {
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }


  buscar( termino: string ) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais( this.termino )
      .subscribe( (paises) => {
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });

  };

  sugerencias( termino: string ){
    this.hayError = false;

    this.paisService.buscarPais( termino )
      .subscribe( 
        (paises) => this.paisesSugeridos = paises.splice(0,3),
        (err) => {
          this.paisesSugeridos = [];
          this.hayError = true;
        }
      );

    this.buscar(termino);
  }
}
