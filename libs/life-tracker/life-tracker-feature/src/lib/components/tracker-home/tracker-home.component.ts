import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@project-mike/shared/shared-data-access';

@Component({
  selector: 'life-tracker-feature-tracker-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tracker-home.component.html',
  styleUrl: './tracker-home.component.scss'
})
export class TrackerHomeComponent implements OnInit {
  private authService = inject(AuthService);

  ngOnInit() {

  }
}
