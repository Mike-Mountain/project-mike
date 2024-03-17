import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatMiniFabButton} from "@angular/material/button";

@Component({
  selector: 'life-tracker-ui-food-entry',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormField, MatIcon, MatInput, MatLabel, MatMiniFabButton, ReactiveFormsModule],
  templateUrl: './food-entry.component.html',
  styleUrl: './food-entry.component.scss',
})
export class FoodEntryComponent {
  @Input() foodType: string = '';
  @Input() formGroup: FormGroup | undefined;
  @Output() foodItem = new EventEmitter<{ value: string, control: string }>();

  public addItem(element: HTMLInputElement) {
    const food = {
      value: element.value,
      control: this.foodType
    }
    this.foodItem.emit(food);
    element.value = '';
  }
}
