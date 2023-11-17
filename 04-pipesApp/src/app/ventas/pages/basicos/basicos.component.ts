import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nombreLowwer = "joaquin";
  nombreUpper = "JOAQUIN";
  nombreCompleto = "joAQuiN GrOSso";

  fecha: Date = new Date();
}
