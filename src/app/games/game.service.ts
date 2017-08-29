import { Injectable } from '@angular/core';
import { Game } from './game';

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

  addGame(player_one: string, player_two: string): Promise<Game> {
    var game = new Game(this.id++, player_one, player_two)
    this.games.push(game);
    return Promise.resolve(game);
  }

  getGame(id: number): Promise<Game> {

    return this.getGames().then(games => games.find(game => game.id === id));
  }
}
