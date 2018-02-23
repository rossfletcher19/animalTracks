import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
        <div>
          <div *ngIf="childSelectedAnimal">
          <h3>Edit Animal</h3>
          <h5>Name: {{childSelectedAnimal.name}}</h5>
          <h5>Species: {{childSelectedAnimal.species}}</h5>
          <h5>Sex: {{childSelectedAnimal.sex}}</h5>
          <h5>Diet: {{childSelectedAnimal.diet}}</h5>
          <h5>Zoo Location: {{childSelectedAnimal.zooLocation}}</h5>
          <h5>Edit:</h5>
          <label>Name:</label>
          <input [(ngModel)]="childSelectedAnimal.name"><br>
          <label>Age:</label>
          <input [(ngModel)]="childSelectedAnimal.age"><br>
          <label># of Caretakers:</label>
          <input [(ngModel)]="childSelectedAnimal.numberOfCaretakers"><br>
          <label>Zoo Location:</label>
          <input [(ngModel)]="childSelectedAnimal.zooLocation"><br>
          <label>Likes:</label>
          <input [(ngModel)]="childSelectedAnimal.likes"><br>
          <label>Dislikes:</label>
          <input [(ngModel)]="childSelectedAnimal.dislikes"><br>
          <button (click)="doneButtonClicked()">Done</button>
          </div>
       </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();


  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

}
