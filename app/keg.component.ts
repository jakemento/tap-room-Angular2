import { Component } from 'angular2/core';
import { Keg } from './keg.model';


@Component({
    selector: 'keg-display',
    inputs: ['keg'],
  template: `
  <div class="container" class="border">
    <div class="col-md-1" class="names">
      <label>
        Name: {{ keg.name }}
      </label>
    </div>

    <div class="col-md-1" class="words">
      <label>
        Brand:  {{ keg.brand }}
      </label>
    </div>

    <div class="col-md-1" class="words" >
      <label>
        Price:  {{ keg.price }}$
      </label>
    </div>

    <div class="col-md-1" class="words">
      <label>
        Alcohol:  {{ keg.alcohol }}%
      </label>
    </div>

    <div class="col-md-1" class="words">
      <label>
        Pints:  {{ keg.pints }}
      </label>


    </div>

    <div class="changeFont">
     {{(keg.pints <= '10') && (keg.pints > 0)  ? 'this keg is close to empty, refill it!' : ''}}
     {{(keg.pints == '0')  ? 'this keg is empty' : ''}}

    </div>

  </div>




  <button (click)="minusOne()" class="btn-success btn-lg add-button"> Sell a Pint</button>
  <button (click)="minusTen()" class="btn-success btn-lg add-button"> Sell 10 pints</button>
  <button (click)="minusAll()" class="btn-success btn-lg add-button"> Sell Out</button>
  <button (click)="restock()" class="btn-danger btn-lg add-button"> Re-Stock</button>


  `
})

export class KegComponent {
  public keg: Keg;
  toggleDone(setState: number) {
    this.keg.pints = setState;
  }
  minusOne() {
    this.keg.pints = this.keg.pints -1;
  }
  minusTen() {
    this.keg.pints = this.keg.pints -10;
  }
  minusAll() {
    this.keg.pints = 0;
  }
  restock() {
    this.keg.pints = 124;
  }
}
