import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "animalview",
  pure: false
})


export class AnimalViewPipe implements PipeTransform {


  transform(input: Animal[], desiredView) {
    let output: Animal[] = [];
    if(desiredView === "animalsYoungerThan2") {
    for (let i = 0; i < input.length; i++) {
      if (input[i].age < 2) {
        output.push(input[i]);
      }
    }
      return output;
    } else if (desiredView === "animals2AndOlder") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].age > 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }


}
