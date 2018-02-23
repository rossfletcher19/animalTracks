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
          <input class="form-control form-control-sm" placeholder="Name" [(ngModel)]="childSelectedAnimal.name"><br>
          <label>Age:</label>
          <input class="form-control form-control-sm" placeholder="Age" [(ngModel)]="childSelectedAnimal.age"><br>
          <label># of Caretakers:</label>
          <input class="form-control form-control-sm" placeholder="# of Caretakers" [(ngModel)]="childSelectedAnimal.numberOfCaretakers"><br>
          <label>Zoo Location:</label>
          <input class="form-control form-control-sm" placeholder="Zoo Location" [(ngModel)]="childSelectedAnimal.zooLocation"><br>
          <label>Likes:</label>
          <input class="form-control form-control-sm" placeholder="Likes" [(ngModel)]="childSelectedAnimal.likes"><br>
          <label>Dislikes:</label>
          <input class="form-control form-control-sm" placeholder="Dislikes" [(ngModel)]="childSelectedAnimal.dislikes"><br>
          <button class="btn btn-success"(click)="doneButtonClicked()">Submit</button>
          </div>
       </div>
       <hr>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();


  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

}
