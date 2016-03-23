import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
// import {DonePipe} from './done.pipe';




@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [DonePipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template: `
  <select (change)="onChange($event.target.value)"class="filter">
    <option value="all">Show All</option>
    <option value="done">Show Done</option>
    <option value="notDone" selected="selected">Show Not Done</option>
  </select>
  <keg-display *ngFor="#currentKeg of kegList | done:filterDone"
    (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
  </edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterDone: string = "notDone";

  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(name: string, brand: string, price: string, alcohol: string ): void {
    // console.log(description);
    this.kegList.push(
      new Keg(name, brand, price, alcohol)
    );
  }

  onChange(filterOption) {
    this.filterDone = filterOption;
  }
}
