export class Game {
  id: number;

  current_player: {};
  players: Array<{ class: string, name: string }> = Array(
    { 'class': 'player_one', 'name': '' },
    { 'class': 'player_two', 'name': '' }
  );

  constructor(id: number, one: string, two: string) {
    this.id = id;
    this.players[0].name = one;
    this.players[1].name = two;
    this.current_player = this.players[0];
  }

  switch_player() {
    this.current_player = (this.current_player === this.players[0]) ? this.players[1] : this.players[0]
  }

}
