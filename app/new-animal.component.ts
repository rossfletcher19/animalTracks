import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h1>New Animal</h1>
    <div>
     <label>Name:</label>
     <input #newName><br>
     <label>Species:</label>
     <input #newSpecies><br>
     <label>Age:</label>
     <input #newAge><br>
     <label>Diet:</label>
     <input #newDiet><br>
     <label>Zoo Location:</label>
     <input #newZooLocation><br>
     <label># of Caretakers:</label>
     <input #newNumberOfCaretakers><br>
     <label>Sex:</label>
     <input #newSex><br>
     <label>Likes:</label>
     <input #newLikes><br>
     <label>Dislikes:</label>
     <input #newDislikes><br>
     <button (click)="submitForm(newName.value, newSpecies.value, newAge.value, newDiet.value, newZooLocation.value, newNumberOfCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newName.value=''; newSpecies.value=''; newAge.value=''; newDiet.value=''; newZooLocation.value=''; newNumberOfCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value=''">Add</button>
   </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(name: string, species: string, age: number, diet: string, zooLocation: string, numberOfCaretakers: string, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(name, species, age, diet, zooLocation, numberOfCaretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

}
