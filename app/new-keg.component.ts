import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>Create Keg: </h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newDescription>
    <button (click)="addKeg(newDescription)" class="btn-success btn-lg add-button">Add Keg</button>
  </div>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userDescription: HTMLInputElement){
    // console.log(userDescription.value);
    this.onSubmitNewKeg.emit(userDescription.value);
    userDescription.value = "";
  }
}
