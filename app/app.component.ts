import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>animalTracks</h1>
      <h3>Curren Date is {{month}}/{{day}}/{{year}}</h3>
      <div class="animalDiv">
        <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
     </div>
     <hr>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>

    </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal("Moon", "Artic Fox", "2", "Carnivore", "Northern Trail", "5", "F", "Cool Shade", "Loud Noises"),
    new Animal("Prince", "Ocelot", "4", "Carnivore", "Tropical Rain Forest Building", "6", "M", "Laying in the sunshine", "Toys that are not rope based"),
    new Animal("TinkerBell", "Northwest Black Tailed Deer", "8", "Herbivore", "Northern Trail", "2", "F", "Delicate Roots and Leaves", "Loud Noises")
];

editAnimal(clickedAnimal) {
  this.selectedAnimal = clickedAnimal;
}

finishedEditing() {
  this.selectedAnimal = null;
}

addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
