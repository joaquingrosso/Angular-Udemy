import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' 

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import { AppRouterModule } from './app-router.module';


import localeEs from '@angular/common/locales/es-AR';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,    
    BrowserAnimationsModule,
    VentasModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue:'es-AR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
