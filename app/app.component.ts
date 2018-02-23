import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>animalTracks</h1>
      <h3>Curren Date is {{month}}/{{day}}/{{year}}</h3>

      <ul>
       <li *ngFor="let currentAnimal of animals"><b>Name:</b> {{currentAnimal.name}} <br>
                                                 <b>Species:</b> {{currentAnimal.species}} <br>
                                                 <b>Age:</b> {{currentAnimal.age}} <br>
                                                 <b>Diet:</b> {{currentAnimal.diet}} <br>
                                                 <b>Zoo Location:</b> {{currentAnimal.zooLocation}} <br>
                                                 <b># of Caretakers:</b> {{currentAnimal.numberOfCaretakers}} <br>
                                                 <b>Sex:</b> {{currentAnimal.sex}} <br>
                                                 <b>Likes:</b> {{currentAnimal.likes}} <br>
                                                 <b>Dislikes:</b> {{currentAnimal.dislikes}} <br> <button (click)="editAnimal(currentAnimal)">Edit!</button></li>
     </ul>
     <hr>
        <div>
          <h3>Edit Animal</h3>
          <h5>Name: {{selectedAnimal.name}}</h5>
          <h5>Species: {{selectedAnimal.species}}</h5>
          <label>Enter Animal Name:</label>
          <input [(ngModel)]="selectedAnimal.name">
          <label>Enter Animal Age:</label>
          <input [(ngModel)]="selectedAnimal.age">
          <label>Enter Animal Caretakers:</label>
          <input [(ngModel)]="selectedAnimal.numberOfCaretakers">
       </div>

    </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();


  animals: Animal[] = [
    new Animal("Moon", "Artic Fox", "2", "Carnivore", "Northern Trail", "5", "F", "Cool Shade", "Loud Noises"),
    new Animal("Prince", "Ocelot", "4", "Carnivore", "Tropical Rain Forest Building", "6", "M", "Laying in the sunshine", "Toys that are not rope based"),
    new Animal("TinkerBell", "Northwest Black Tailed Deer", "8", "Herbivore", "Northern Trail", "2", "F", "Delicate Roots and Leaves", "Loud Noises")
];
selectedAnimal: Animal = this.animals[0];

editAnimal(clickedAnimal) {
  this.selectedAnimal = clickedAnimal;
}

// finishedEditing() {
//   this.selectedAnimal = null;
// }

}
