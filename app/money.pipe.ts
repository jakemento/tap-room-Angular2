import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: "money",
  pure: false
})
export class MoneyPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredDoneState = args[0];
    if(desiredDoneState === "moreThan30") {
      return input.filter((keg) => {
        return keg.price > 10;
      });
    } else if (desiredDoneState === "lessThan30") {
      return input.filter((keg) => {
        return keg.price < 10;
      });
    } else {
      return input;
    }
  }
}
