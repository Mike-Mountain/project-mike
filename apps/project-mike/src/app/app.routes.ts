import { Route } from '@angular/router';
import { ResumeContainerComponent } from '@project-mike/resume/resume-feature';
import { HomeComponent } from '@project-mike/core/core-ui';

export const appRoutes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeContainerComponent }
];
