export interface IPlayer {
  name: string;
  sign: string;
}
export interface IGame {
  id: number;
  error: String;
  squares: Array<string>;

  player: Player;
  players: Array<Player>;

}

export class Player implements IPlayer {
  name: string;
  sign: string;

  constructor(name: string, sign: string) {
    this.name = name;
    this.sign = sign;
  }
}
export class Game implements IGame {
  id: number;
  error: String;
  squares: Array<string>;

  player: Player;
  players: Array<Player> = [];

  constructor(id, players: Array<Player>) {
    this.id = id;
    this.squares = Array(9).fill(null);
    this.players = players
    this.player = this.players[0];
  }

  makeMove(id: number): boolean{
    this.error = ''
    if (this.squares[id]) {
      this.error = "Move already exists."
      return false;
    }
    if (this.checkWinner()) {
      return false;
    }
    this.squares[id] = this.player.sign;
    this.player = (this.player.sign === this.players[0].sign) ? this.players[1] : this.players[0]

    return true;
  }

  checkWinner() {
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
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.player;
      }
    }
    return null;
  }

  switch_player() {

  }

}
