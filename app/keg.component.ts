import { Component } from 'angular2/core';
import { Keg } from './keg.model';


@Component({
    selector: 'keg-display',
    inputs: ['keg'],
  template: `
  <div class="container">
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
        Price:  {{ keg.price }}
      </label>
    </div>

    <div class="col-md-1" class="words">
      <label>
        Alcohol:  {{ keg.alcohol }}
      </label>
    </div>

    <div class="col-md-1" class="words">
      <label>
        Pints:  {{ keg.pints }}
      </label>
    </div>
  </div>
  `
})

export class KegComponent {
  public keg: Keg;
  toggleDone(setState: number) {
    this.keg.pints = setState;
  }
}
