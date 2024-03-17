import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {
  FoodEntryComponent,
  SelectMoodComponent,
  SlidersComponent, WorkoutComponent
} from '@project-mike/life-tracker/life-tracker-ui';
import {ReplaySubject, takeUntil} from 'rxjs';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatSlider, MatSliderThumb} from '@angular/material/slider';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {AsPipe} from '@project-mike/shared/shared-util';
import {MatInput} from '@angular/material/input';
import {MatButton, MatIconButton, MatMiniFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatChip} from "@angular/material/chips";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";

@Component({
  selector: 'life-tracker-feature-log-entry-container',
  standalone: true,
  imports: [CommonModule, SelectMoodComponent, ReactiveFormsModule, MatCard, MatCardContent, MatSlider, MatSliderThumb, MatLabel, AsPipe, SlidersComponent, MatFormField, MatInput, MatIconButton, MatIcon, MatMiniFabButton, FoodEntryComponent, MatChip, MatRadioGroup, MatRadioButton, WorkoutComponent, MatButton],
  templateUrl: './log-entry-container.component.html',
  styleUrl: './log-entry-container.component.scss'
})
export class LogEntryContainerComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private formBuilder = inject(FormBuilder);

  public logForm: FormGroup | undefined;
  public sliders: FormArray | undefined;
  public foodTypes = [
    'breakfast',
    'lunch',
    'dinner',
    'snacks'
  ]

  private destroyed$ = new ReplaySubject<boolean>(1);
  protected readonly FormGroup = FormGroup;
  protected readonly FormControl = FormControl;

  ngOnInit() {
    this.route.queryParams
      .pipe(takeUntil(this.destroyed$))
      .subscribe((params) => this.createLogForm(params['mood']));
  }

  private createLogForm(selectedMood: string) {
    this.logForm = this.formBuilder.group({
      mood: [selectedMood, Validators.required],
      workedOut: [false],
      workoutIntensity: ['none'],
      moodNotes: [''],
      drinks: this.formBuilder.array([]),
      activities: this.formBuilder.array([]),
      journalEntry: [''],
      food: this.formBuilder.group({
        breakfast: this.formBuilder.array([]),
        lunch: this.formBuilder.array([]),
        dinner: this.formBuilder.array([]),
        snacks: this.formBuilder.array([])
      }),
      bathroom: this.formBuilder.group({
        urine: this.formBuilder.array([]),
        stool: this.formBuilder.array([])
      }),
      sliders: this.formBuilder.array([
        this.formBuilder.group({
          name: ['Anxiety Level'],
          value: [0]
        }),
        this.formBuilder.group({
          name: ['Happiness Level'],
          value: [0]
        })
      ])
    });
    this.sliders = this.logForm.controls['sliders'] as FormArray<FormGroup>;
    console.log(this.sliders);
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  public selectMood(mood: string) {
    if (this.logForm) {
      const moodControl = this.logForm.controls['mood'];
      moodControl.patchValue(mood);
    }
  }

  public logFormVal() {
    console.log(this.logForm?.value);
  }

  public addItem(data: { value: string, control: string }, controlName: string) {
    if (this.logForm) {
      let array: FormArray<any>;
      if (controlName === 'food' || controlName === 'bathroom') {
        array = (this.logForm.controls[controlName] as FormGroup).controls[data.control] as FormArray;
      } else {
        array = this.logForm.controls[controlName] as FormArray;
      }
      const control = new FormControl(data.value);

      console.log(array);
      array.push(control);
      this.logFormVal();
    }
  }

  public submitForm() {
    if (this.logForm) {
      const logEntry = this.logForm.value;
      console.log(logEntry);
    }
  }
}
