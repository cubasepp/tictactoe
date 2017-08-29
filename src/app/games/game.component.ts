import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Game } from './game';
import { GameService } from './game.service';

@Component({
  templateUrl: './game.component.html',
})

export class GamePlay implements OnInit  {
  game: Game;

  constructor( private gameService: GameService, private route: ActivatedRoute, private router: Router ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.gameService.getGame(+params.get('id')))
      .subscribe((game) => {

        if (game) {
          this.game = game
        } else {
          this.router.navigate(['/game']);
        }
      });
  }

  makeMove(event, x, y): void {
    // Append new class. I don't know a other solution yet.
    if (!event.target.classList.contains('active')) {
      event.target.className = event.target.className + ' active';
      this.game.switch_player();
    }
  }
}
