import { Routes } from '@angular/router';
import { LogEntryContainerComponent } from './components/log-entry-container/log-entry-container.component';
import { TrackerHomeComponent } from './components/tracker-home/tracker-home.component';
import { authGuard } from '@project-mike/shared/shared-data-access';

export const trackerRoutes: Routes = [
  { path: '', component: TrackerHomeComponent, canActivate: [authGuard] },
  { path: 'log-entry', component: LogEntryContainerComponent, canActivate: [authGuard] }
];
