import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameBoardComponent } from '@project-mike/code-master/code-master-ui';
import { WinState, colors, CmGameService, CmSettingsService } from '@project-mike/code-master/code-master-data-access';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'code-master-feature-game-container',
  standalone: true,
  imports: [CommonModule, GameBoardComponent],
  templateUrl: './game-container.component.html',
  styleUrl: './game-container.component.scss'
})
export class GameContainerComponent {
  @ViewChild('gameOver') private gameOver: TemplateRef<HTMLElement> | undefined;

  public computerColors: string[] = [];
  public colors = colors;
  public showColors = false;

  public state: WinState = WinState.InProgress;
  public WinsState = WinState;

  private turns = 0;

  constructor(
    private mastermindService: CmGameService,
    private settingsQuery: CmSettingsService,
    private dialog: MatDialog
  ) {
  }
}
