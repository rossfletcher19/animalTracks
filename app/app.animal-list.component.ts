import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <div class="container">
      <h1>animalTracks</h1>
      <h3>Our Current Residents</h3>

      <ul>
       <li *ngFor="let currentAnimal of animals">{{currentAnimal.name}}</li>
     </ul>

    </div>
  `
})

export class AnimalListComponent {

};
