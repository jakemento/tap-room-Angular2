import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: "status",
  pure: false
})
export class DonePipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredDoneState = args[0];
    if(desiredDoneState === "moreThan10") {
      return input.filter((keg) => {
        return keg.alcohol > 10;
      });
    } else if (desiredDoneState === "lessThan10") {
      return input.filter((keg) => {
        return keg.alcohol < 10;
      });
    } else {
      return input;
    }
  }
}
