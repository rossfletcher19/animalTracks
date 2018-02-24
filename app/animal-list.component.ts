import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
      <h3>Our Current Residents</h3>

      <select (change)="onChange($event.target.value)">
        <option value="allAnimals" selected="selected">All Animals</option>
        <option value="animals2AndOlder">Animals 2 years and older</option>
        <option value="animalsYoungerThan2" >Animals Younger Than 2 years</option>
      </select>
      <nav>
        <ul>
         <li *ngFor="let currentAnimal of childAnimalList | animalview:filterByAnimalAge">
                                                   <b>Name:</b> {{currentAnimal.name}} <br>
                                                   <b>Species:</b> {{currentAnimal.species}} <br>
                                                   <b>Age:</b> {{currentAnimal.age}} <br>
                                                   <b>Diet:</b> {{currentAnimal.diet}} <br>
                                                   <b>Zoo Location:</b> {{currentAnimal.zooLocation}} <br>
                                                   <b># of Caretakers:</b> {{currentAnimal.numberOfCaretakers}} <br>
                                                   <b>Sex:</b> {{currentAnimal.sex}} <br>
                                                   <b>Likes:</b> {{currentAnimal.likes}} <br>
                                                   <b>Dislikes:</b> {{currentAnimal.dislikes}} <br> <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button></li>
       </ul>
     </nav>
  `
})


export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAnimalAge: string = "allAnimals";

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
  this.filterByAnimalAge = optionFromMenu;
  }

}
