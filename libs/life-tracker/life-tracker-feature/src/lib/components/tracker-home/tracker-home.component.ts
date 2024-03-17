import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@project-mike/shared/shared-data-access';
import { MatCard, MatCardContent } from '@angular/material/card';
import { Router } from '@angular/router';
import {LifeTrackerService} from "@project-mike/life-tracker/life-tracker-data-access";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SplitPipe} from "@project-mike/shared/shared-util";


@Component({
  selector: 'life-tracker-feature-tracker-home',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardContent, MatSlider, FormsModule, MatSliderThumb, ReactiveFormsModule, SplitPipe],
  templateUrl: './tracker-home.component.html',
  styleUrl: './tracker-home.component.scss'
})
export class TrackerHomeComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private trackerService = inject(LifeTrackerService);

  public user$ = this.authService.getUser();
  public entries$ = this.trackerService.getLogEntries();

  createEntry(mood: string) {
    this.router.navigate(['tracker/log-entry'], { queryParams: { mood } });
  }
}
