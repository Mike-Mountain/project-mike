import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmGameService, CsmGameTurn, TurnState, WinState } from '@project-mike/code-master/code-master-data-access';

@Component({
  selector: 'code-master-ui-game-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.scss'
})
export class GameBoardComponent implements OnInit {
  @Input() public colors: string[] = [];
  @Input() public masterColors: string[] = [];
  @Input() public state = WinState.InProgress;

  public turns: CsmGameTurn[] = [];
  public turnState = TurnState;
  public winState = WinState;

  constructor(private gameService: CmGameService) {
  }

  ngOnInit() {
    this.gameService.getTurns().subscribe(turns => this.turns = turns);
  }
}
