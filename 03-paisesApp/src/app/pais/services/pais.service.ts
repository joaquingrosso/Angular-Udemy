import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  get httpParams(){
    return new HttpParams().set('fields','name,capital,population,flags,cca2');
  }

  traerTodo(): Observable<Country[]>{
    const url = `${ this.apiUrl}/all`
    return this.http.get<Country[]>( url, { params : this.httpParams } );
  }

  buscarPais( termino: string ): Observable<Country[]> {
    if (termino === '') {
      return this.traerTodo();    
    }else {
      const url = `${ this.apiUrl}/name/${ termino }`
      return this.http.get<Country[]>( url, { params : this.httpParams } );
    }
  }


  buscarCapital( capital: string ): Observable<Country[]> {
    if (capital === '') {
      return this.traerTodo();    
    }else {
      const url = `${ this.apiUrl}/capital/${ capital }`
      return this.http.get<Country[]>( url, { params : this.httpParams } );
    }
  }

  buscarRegion( region: string ): Observable<Country[]> {
    if (region === '') {
      return this.traerTodo();    
    }else {
      const url = `${ this.apiUrl}/region/${ region }`
      return this.http.get<Country[]>( url, { params : this.httpParams } );
    }
  }

  getPaisAlpha( id: string ): Observable<Country> {
    const url = `https://restcountries.com/v2/alpha/${ id }`  //uso otra version de la api porque en la 3 me trae un arreglo
    return this.http.get<Country>( url );
  }
}
