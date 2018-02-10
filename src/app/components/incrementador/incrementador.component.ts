import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() progreso: number = 50;
  @Input() leyenda: string = 'Leyenda';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  @Output() changes: EventEmitter<number> = new EventEmitter();

  constructor() {  }

  ngOnInit() {
  }

  onChanges (newValue: number) {

    if ( newValue <= 100 && newValue >= 0) {
      this.progreso = newValue;
    } else {
      if ( newValue > 100) {
        this.progreso = 100;
      } else if ( newValue < 0) {
        this.progreso = 0;
      }
    }

    this.changes.emit(this.progreso);

  }

  cambiarValor(valor: number) {
    if ( this.progreso + valor > 100 ) {
      return;
    }
    if ( this.progreso + valor < 0 ) {
      return;
    }
    this.progreso = this.progreso + valor;

    this.cambioValor.emit(this.progreso);
  }

}
