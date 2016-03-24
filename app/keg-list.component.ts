import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import {DonePipe} from './done.pipe';




@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [DonePipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template: `

  <div class="keglister">
    <select (change)="onChange($event.target.value)">
      <option value="all">Show All</option>
      <option value="lessThan10">Less than 10%</option>
      <option value="moreThan10" selected="selected">More Than Ten</option>
    </select>
    <keg-display *ngFor="#currentKeg of kegList | status:filterDone"
      (click)="kegClicked(currentKeg)"
      [class.selected]="currentKeg === selectedKeg"
      [keg]="currentKeg">
    </keg-display>
  </div>
  <div class="border">
    <div class="col-lg-6">
      <center> <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg> </center>
    </div>

    <div class="col-lg-6">
      <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
      </edit-keg-details>
    </div>
  </div>
  `

})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterDone: string = "all";

  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg([name , brand, price, alcohol ]): void {
    this.kegList.push(
      new Keg(name, brand, price, alcohol)
    );
  }

  onChange(filterOption) {
    this.filterDone = filterOption;
  }

}
