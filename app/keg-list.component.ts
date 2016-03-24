import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import {DonePipe} from './done.pipe';
import {MoneyPipe} from './money.pipe';





@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [DonePipe, MoneyPipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template: `

  <div class="keglister">
    <label class="whiteText"> sort by ABV </label>
    <div class ="biggerFont">
      <select (change)="onChange($event.target.value)">
        <option value="lessThan10">Less than 10%</option>
        <option value="moreThan10">More Than 10%</option>
        <option value="all" selected="selected">Show All</option>
      </select>
      <label class="whiteText"> sort by price </label>
      <select (change)="onChangeTwo($event.target.value)">
        <option value="lessThan30">Less than 30$</option>
        <option value="moreThan30">More Than 30$</option>
        <option value="all" selected="selected">Show All</option>
      </select>
    </div>
    <keg-display *ngFor="#currentKeg of kegList | money:filterDoneTwo | status:filterDone"
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
  public filterDoneTwo: string = "all";


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

  onChangeTwo(filterOption) {
    this.filterDoneTwo = filterOption;
  }

}
