import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, JsonPipe, Location } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable, of, tap } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet, UrlSegment } from '@angular/router';
import { ToolbarService } from '@project-mike/shared/shared-util';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'core-ui-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    RouterLink,
    MatMenuTrigger,
    JsonPipe
  ]
})
export class LayoutComponent {
  public isHandset$: Observable<boolean>;
  public title$: Observable<string>;
  public path$: Observable<string>;

  constructor(private toolbarService: ToolbarService,
              private breakpointObserver: BreakpointObserver,
              private router: Router) {
    this.path$ = this.router.events.pipe(
      map((event) => {
        if (event instanceof NavigationEnd) {
          return event.url
        } else {
          return ''
        }
      })
    )
    this.title$ = this.toolbarService.getTitle();
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

  public openInstructions() {
    this.toolbarService.showInstructions();
  }

  public openSettings() {
    this.toolbarService.showSettings();
  }
}
