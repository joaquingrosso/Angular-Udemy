import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  
  constructor( private paisService: PaisService ) { 
    this.paisService.buscarCapital( this.termino )  //se envia el termino vacio
      .subscribe( 
        (paises) => this.paises = paises ,
        (err) => {
          this.hayError = true;
          this.paises = [];
        }
      );
  }

  buscar( termino: string ) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital( this.termino )  //se envia el termino vacio
      .subscribe( 
        (paises) => this.paises = paises ,
        (err) => {
          this.hayError = true;
          this.paises = [];
        }
      );

  };

  sugerencias( termino: string ){
    this.hayError = false;

    this.paisService.buscarCapital( termino )
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
