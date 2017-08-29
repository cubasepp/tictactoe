import { Component, OnInit }                  from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { GameService } from './game.service';

@Component({
  templateUrl: './new.component.html',

})
export class NewGame implements OnInit {
  newGameForm: FormGroup;
  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit(): void {
    this.newGameForm = new FormGroup({
      'player_one': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'player_two': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  get player_one() { return this.newGameForm.get('player_one'); }
  get player_two() { return this.newGameForm.get('player_two'); }

  startGame(postData): void {
    this.gameService.addGame(this.newGameForm.value.player_one, this.newGameForm.value.player_two).then(game => {
      this.router.navigate(['/game', game.id])
    });
  }
}
