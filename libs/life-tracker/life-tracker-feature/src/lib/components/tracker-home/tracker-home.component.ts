import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@project-mike/shared/shared-data-access';
import { MatCard, MatCardContent } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'life-tracker-feature-tracker-home',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardContent],
  templateUrl: './tracker-home.component.html',
  styleUrl: './tracker-home.component.scss'
})
export class TrackerHomeComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  public user$ = this.authService.getUser();

  createEntry(mood: string) {
    this.router.navigate(['tracker/log-entry'], { queryParams: { mood } });
  }
}
