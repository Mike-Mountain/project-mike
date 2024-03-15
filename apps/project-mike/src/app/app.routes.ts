import { Route } from '@angular/router';
import { ResumeContainerComponent } from '@project-mike/resume/resume-feature';
import { HomeComponent } from '@project-mike/core/core-ui';
import { GameContainerComponent } from '@project-mike/code-master/code-master-feature';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeContainerComponent },
  { path: 'code-master', component: GameContainerComponent },
  {
    path: 'tracker',
    // loadChildren: () => import('@project-mike/life-tracker-routing/tracker.routes').then(r => r.trackerRoutes)
    loadChildren: () => import('libs/life-tracker/life-tracker-feature/src/lib/tracker.routes').then(r => r.trackerRoutes)
  }
];
