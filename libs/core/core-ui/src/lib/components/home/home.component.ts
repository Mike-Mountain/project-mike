import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';
import { PersonalDetailsComponent } from '@project-mike/shared/shared-ui';
import { homeDetails, PersonalDetails } from '@project-mike/shared/shared-data-access';
import { ToolbarService } from '@project-mike/shared/shared-util';

@Component({
  selector: 'core-ui-home',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardContent, PersonalDetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public personalDetails: PersonalDetails = homeDetails;

  constructor(private toolbarService: ToolbarService) {
    this.toolbarService.updateTitle('Home')
  }
}
