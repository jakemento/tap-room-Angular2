import { Component } from 'angular2/core';
import { Keg } from './keg.model';


@Component({
    selector: 'keg-display',
    inputs: ['keg'],
  template: `
  <div class="container">
    <label>
    Name: {{ keg.name }} ||
    Brand:  {{ keg.brand }} ||
    Price:  {{ keg.price }} ||
    Alcohol%:  {{ keg.alcohol }} ||
    Pints:  {{ keg.pints }}
    </label>
  </div>
  `
})

export class KegComponent {
  public keg: Keg;
  toggleDone(setState: number) {
    this.keg.pints = setState;
  }
}
