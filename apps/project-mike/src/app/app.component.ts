import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '@project-mike/core/core-ui';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutComponent],
  selector: 'project-mike-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'project-mike';
}
