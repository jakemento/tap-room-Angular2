import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>Create Keg: </h3>
      <input placeholder="Name" class="col-sm-8 input-lg" #newName>
      <input placeholder="Brand" class="col-sm-8 input-lg" #newBrand>
      <input placeholder="Price" class="col-sm-8 input-lg" #newPrice>
      <input placeholder="Alcohol" class="col-sm-8 input-lg" #newAlcohol>


      <button (click)="addKeg(newName, newBrand, newPrice, newAlcohol)" class="btn-success btn-lg add-button">Add Keg</button>
  </div>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<string[]>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userAlcohol: HTMLInputElement){
    this.onSubmitNewKeg.emit([userName.value, userBrand.value, userPrice.value, userAlcohol.value]);

    userName.value = "";
    userBrand.value = "";
    userPrice.value = "";
    userAlcohol.value = "";
  }
}
