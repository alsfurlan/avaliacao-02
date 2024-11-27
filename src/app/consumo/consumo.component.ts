import { Component } from '@angular/core';

@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.scss'],
})
export class ConsumoComponent {
  distancia: number = 0;
  litros: number = 0;
  resultado: string = '';
  resultadoClasse: string = '';

  calcular() {
    const consumo = this.distancia / this.litros;
    if (consumo > 13) {
      this.resultado = `${consumo.toFixed(2)} Km/l - Econômico`;
      this.resultadoClasse = 'economico';
    } else if (consumo >= 10) {
      this.resultado = `${consumo.toFixed(2)} Km/l - Normal`;
      this.resultadoClasse = 'normal';
    } else {
      this.resultado = `${consumo.toFixed(2)} Km/l - Gastador`;
      this.resultadoClasse = 'gastador';
    }
  }

  limpar() {
    this.distancia = 0;
    this.litros = 0;
    this.resultado = '';
    this.resultadoClasse = '';
  }
}
