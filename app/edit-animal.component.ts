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
          <label>Enter Animal Name:</label>
          <input [(ngModel)]="childSelectedAnimal.name">
          <label>Enter Animal Age:</label>
          <input [(ngModel)]="childSelectedAnimal.age">
          <label>Enter Animal Caretakers:</label>
          <input [(ngModel)]="childSelectedAnimal.numberOfCaretakers">
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
