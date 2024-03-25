import {Component, inject, OnInit, TemplateRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@project-mike/shared/shared-data-access';
import { MatCard, MatCardContent } from '@angular/material/card';
import { Router } from '@angular/router';
import {LifeTrackerService} from "@project-mike/life-tracker/life-tracker-data-access";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LengthPipe, SplitPipe, TruncatePipe} from '@project-mike/shared/shared-util';
import {DocumentData} from "@angular/fire/compat/firestore";
import {MatDialog} from "@angular/material/dialog";
import {MatChip} from "@angular/material/chips";
import {ListDisplayComponent} from "@project-mike/shared/shared-ui";


@Component({
  selector: 'life-tracker-feature-tracker-home',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardContent, MatSlider, FormsModule, MatSliderThumb, ReactiveFormsModule, SplitPipe, LengthPipe, TruncatePipe, MatChip, ListDisplayComponent],
  templateUrl: './tracker-home.component.html',
  styleUrl: './tracker-home.component.scss'
})
export class TrackerHomeComponent {
  private authService = inject(AuthService);
  private trackerService = inject(LifeTrackerService);
  private router = inject(Router);
  private dialog = inject(MatDialog);

  public user$ = this.authService.getUser();
  public entries$ = this.trackerService.getLogEntries();
  public selectedEntry: DocumentData | undefined;

  public createEntry(mood: string): void {
    this.router.navigate(['tracker/log-entry'], { queryParams: { mood } });
  }

  public expandEntry(entry: DocumentData, template: TemplateRef<any>): void {
    this.selectedEntry = entry;
    this.dialog.open(template);
  }
}
