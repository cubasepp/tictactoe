import { Injectable } from '@angular/core';
import { Game, Player  } from './game';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class GameService {
  games: Game[];
  id: number

  constructor() {
    this.games = [];
    this.id = 1
  }

  getGames(): Promise<Game[]> {
    return Promise.resolve(this.games);
  }

  addGame(players: Array<Player>): Promise<Game> {
    var game = new Game(this.id++, players)
    this.games.push(game);
    return Promise.resolve(game);
  }

  getGame(id: number): Promise<Game> {
    return this.getGames().then(games => games.find(game => game.id === id));
  }
}
