import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
    }
  
  `    
  ]
})
export class PorRegionComponent{
  regionActiva: string ='';
  regiones: string[] = ['americas','africa','europe','asia','oceania'];
  hayError: boolean = false;
  paises: Country[] = [];
  
  constructor( private paisService: PaisService ) {
    
    /*this.paisService.buscarRegion( this.termino ) //se envia el termino vacio
      .subscribe( (paises) => {
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });*/
  }

  activarRegion( region: string){
    if( this.regionActiva === region ) { return; }

    this.paises = [];
    this.regionActiva = region;     
    this.buscar();
  }

  getClaseCSS( region: string ): string{
    return (this.regionActiva === region )  ? 'btn btn-primary' : 'btn btn-outline-primary';
  }


  buscar() {
    this.hayError = false;

    this.paisService.buscarRegion( this.regionActiva )
      .subscribe( (paises) => {
        this.paises = paises;

      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });

  };

}
