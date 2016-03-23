import { Component } from 'angular2/core';
import { Keg } from './keg.model';


@Component({
    selector: 'keg-display',
    inputs: ['keg'],
  template: `
  <div>
    <input *ngIf="keg.done" type="checkbox" checked (click)="toggleDone(false)"/>
    <input *ngIf="!keg.done" type="checkbox" (click)="toggleDone(true)"/>
    <label>{{ keg.name }}</label>
  </div>
  `
})

export class KegComponent {
  public keg: Keg;
  // toggleDone(setState: boolean) {
  //   this.keg.done = setState;
  // }
}
