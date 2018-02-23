import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h3>New Animal</h3>
         <input class="form-control form-control-sm" placeholder="Name" #newName><br>
         <input class="form-control form-control-sm" placeholder="Species" #newSpecies><br>
         <input class="form-control form-control-sm" placeholder="Age" #newAge><br>
         <input class="form-control form-control-sm" placeholder="Diet" #newDiet><br>
         <input class="form-control form-control-sm" placeholder="Zoo Location" #newZooLocation><br>
         <input class="form-control form-control-sm" placeholder="# of Caretakers" #newNumberOfCaretakers><br>
         <input class="form-control form-control-sm" placeholder="Sex" #newSex><br>
         <input class="form-control form-control-sm" placeholder="Likes" #newLikes><br>
         <input class="form-control form-control-sm" placeholder="Dislikes"#newDislikes><br>
         <button class="btn btn-success" (click)="submitForm(newName.value, newSpecies.value, newAge.value, newDiet.value, newZooLocation.value, newNumberOfCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newName.value=''; newSpecies.value=''; newAge.value=''; newDiet.value=''; newZooLocation.value=''; newNumberOfCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value=''">Add</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(name: string, species: string, age: number, diet: string, zooLocation: string, numberOfCaretakers: string, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(name, species, age, diet, zooLocation, numberOfCaretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

}
