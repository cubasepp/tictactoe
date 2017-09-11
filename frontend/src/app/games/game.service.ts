import { Injectable } from '@angular/core';
import { Game, Player  } from './game';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GameService {

  private gameUrl = '';

  constructor(private http: Http) {}

  getGames(): Promise<Game[]> {
    return this.http.get(this.gameUrl)
      .toPromise()
      .then(response => response.json().games as Game[])
      .catch(this.handleError);
  }

  createGame(params): Promise<Game> {
    return this.http
      .post(this.gameUrl, JSON.stringify(params))
      .toPromise()
      .then(res => res.json() as Game)
      .catch(this.handleError);
  }

  getGame(id: number): Promise<Game> {
    return this.http.get(this.gameUrl + id)
      .toPromise()
      .then(response => response.json() as Game[])
      .catch(this.handleError);
  }

  makeMove(id: number, params): Promise<Game> {
    return this.http
      .post(this.gameUrl + id, JSON.stringify(params))
      .toPromise()
      .then(res => res.json() as Game)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
