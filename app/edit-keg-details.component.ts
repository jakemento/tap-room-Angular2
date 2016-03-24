import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <br>
  <br>
  <br>
    <h3 class="border">Edit Keg: </h3>
    <div class="keg-form">
      <input [(ngModel)]="keg.name" class="col-sm-8 input-lg"/>
      <input [(ngModel)]="keg.brand" class="col-sm-8 input-lg"/>
      <input [(ngModel)]="keg.price" class="col-sm-8 input-lg"/>
      <input [(ngModel)]="keg.alcohol" class="col-sm-8 input-lg"/>
    </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
