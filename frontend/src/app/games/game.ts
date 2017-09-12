export class Player {
  id: number;
  game_id: number;
  name: string;
  sign: string;
}
export class Game {
  id: number;
  moves: Array<string>;

  player_id: number;
  players: Array<Player> = [];

  public makeMove(id: number, sign: string): boolean{
    if (this.moves[id]) {
      return false;
    }
    if (this.checkWinner()) {
      return false;
    }
    this.moves[id] = sign;

    return true;
  }

  public checkDraw(): boolean {
    return this.moves.filter(move => move !== null).length === 9
  }

  public checkWinner(): boolean {
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
      if (this.moves[a] && this.moves[a] === this.moves[b] &&
          this.moves[a] === this.moves[c]) {
        return true;
      }
    }
    return false;
  }

}
