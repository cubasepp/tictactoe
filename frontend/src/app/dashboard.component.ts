import { Component, OnInit } from '@angular/core';

import { GameService } from './games/game.service';
import { Game } from './games/game';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  title = 'TicTacToe App';

  games: Game[]

  start: number = 0;
  steps: number = 10;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGames().then(games => { this.games = games });
  }

  checkWin(moves: Array<string>): boolean {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
        return true;
      }
    }
    return false;
  }
}
