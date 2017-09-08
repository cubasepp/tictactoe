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

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGames().then(games => { this.games = games });
  }
}
