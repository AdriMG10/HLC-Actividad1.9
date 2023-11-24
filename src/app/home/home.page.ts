import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  salida: string = '';
  esCorrecto: boolean = false;
  valor: number = 0;
  gradosCelsius: number = 0;
  gradosFahrenheit: number = 0;
  gradosKelvin: number = 0;

  constructor() {}

  reiniciar() {
    this.valor = 0;
    this.salida =  '';
    this.esCorrecto = false;
  }

  unidadCelsius() {
    this.gradosFahrenheit = (this.valor * 9) / 5 + 32;
    this.gradosKelvin = this.valor + 273.15;
    this.salida =
      this.valor +
      'ºC = ' +
      this.gradosFahrenheit.toFixed(2) +
      'ºF / ' +
      this.gradosKelvin.toFixed(2) +
      'K';
    this.esCorrecto = true;
  }

  unidadFahrenheit() {
    this.gradosCelsius = ((this.valor - 32) * 5) / 9;
    this.gradosKelvin = ((this.valor - 32) * 5) / 9 + 273.15;
    this.salida =
      this.valor +
      'ºF = ' +
      this.gradosCelsius.toFixed(2) +
      'ºC / ' +
      this.gradosKelvin.toFixed(2) +
      'K';
    this.esCorrecto = true;
  }

  unidadKelvin() {
    this.gradosCelsius = this.valor - 273.15;
    this.gradosFahrenheit = ((this.valor - 273.15) * 9) / 5 + 32;
    this.salida =
      this.valor +
      'K = ' +
      this.gradosCelsius.toFixed(2) +
      'ºC / ' +
      this.gradosFahrenheit.toFixed(2) +
      'ºF';
    this.esCorrecto = true;
  }
}
