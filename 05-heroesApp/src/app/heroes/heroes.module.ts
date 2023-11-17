import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { HeroesRoutingModule } from './heroes-routing.module';

import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';


@NgModule({
  declarations: [
    BuscarComponent,
    HeroeComponent,
    HeroesHomeComponent,
    AgregarComponent,
    ListadoComponent,
    HeroeTarjetaComponent,
    ImagenPipe    
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class HeroesModule { }
