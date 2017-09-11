import 'rxjs/add/operator/switchMap';

import { Observable } from 'rxjs/Rx';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Game, Player } from './game';
import { GameService } from './game.service';

@Component({
  templateUrl: './play.component.html',
})

export class GamePlay implements OnInit  {
  game: Game;
  player: Player;

  win: boolean = false;

  constructor(private gameService: GameService,
              private route: ActivatedRoute,
              private router: Router ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.gameService.getGame(+params.get('id')))
      .subscribe(
        (game) => {
          this.game = Object.assign(new Game(), game)
          this.player = this.game.players.find(player => player.id == this.game.player_id)
          this.win = this.game.checkWinner()
        }
      );
  }

  getClass(id: number): string {
    if (this.game) {
      if (this.game.moves[id]) {
        return this.game.moves[id] + " active";
      }
    }
  }

  makeMove(event, id: number): void {
    // Append new class. I don't know a other solution yet.
    if (!event.target.classList.contains('active')) {
      if (this.game.makeMove(id, this.player.sign)) {
        event.target.className = event.target.className + ' active';

        this.gameService.makeMove(this.game.id, this.game.moves)
          .then(
            (game) => {
              this.player = this.game.players.find(player => player.id == game.player_id)
              this.win = this.game.checkWinner()
          })
      }
    }
  }
}
