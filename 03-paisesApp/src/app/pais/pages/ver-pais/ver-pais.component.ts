import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {  }

  ngOnInit(): void {    
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.getPaisAlpha( id ) ),
        tap( console.log )
      ).subscribe( pais => this.pais = pais );  
    /* mismo codigo de arriba, pero el switchMap es mas acotado
    this.activatedRoute.params
      .subscribe( ({ id }) => {
        this.paisService.getPaisAlpha( id )
          .subscribe( pais => {
            this.pais = pais;
          });        
      });         
    */

  }

}
