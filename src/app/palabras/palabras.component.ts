import {Component, OnInit} from '@angular/core';
import Speech from 'speak-tts';

@Component({
  selector: 'app-palabras',
  templateUrl: './palabras.component.html',
  styleUrls: ['./palabras.component.css']
})
export class PalabrasComponent implements OnInit {


  public palabras: Array<string>;
  public eliminarDuplicados: boolean;
  private speech = new Speech();

  constructor() {
  }

  ngOnInit(): void {
  }

  separarPalabras(oracion: string): void {
    if (this.eliminarDuplicados) {
      this.palabras = [...new Set(oracion.split(' '))];
    } else {
      this.palabras = oracion.split(' ');
    }
  }

  limpiarDatos(): void {
    this.palabras = new Array<string>();
  }

  hablar(texto: string): void {
    console.log(texto);
    if (this.speech.hasBrowserSupport()) {
      this.speech.init();
      this.speech.speak({
        text: texto,
        lang: 'es-ES',
        rate: 1,
        volume: 1,
      }).then(() => {
        console.log(':D');
      }).catch(e => {
        console.error('Yam me dio amsiedad xd:', e);
      });
    }
  }

}
