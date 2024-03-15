import { Routes } from '@angular/router';
import { LogEntryContainerComponent } from './components/log-entry-container/log-entry-container.component';
import { TrackerHomeComponent } from './components/tracker-home/tracker-home.component';

export const trackerRoutes: Routes = [
  { path: '', component: TrackerHomeComponent },
  { path: 'log-entry', component: LogEntryContainerComponent }
];
