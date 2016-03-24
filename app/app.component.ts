import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';



@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container"> <center>
      <h1>Tap Room </h1>
      <h1> What's on Tap:</h1>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list> </center>
    </div>
    <div>
      <img class="banner" src="resources/images/img.jpg" />
    </div>

  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Grunion", "Ballast Point", "38", 7),
      new Keg("Nectar", "Humboldt Brewering Co.", "40", 6),
      new Keg("Citrus Mistress", "Hop Valley", "35", 13),
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }
}
