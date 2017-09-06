import { Component, OnInit }                  from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Game } from './game';

import { GameService } from './game.service';

@Component({
  templateUrl: './new.component.html',

})
export class NewGame implements OnInit {
  game: Game
  public newGameForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private gameService: GameService, private router: Router) {}

  ngOnInit(): void {
    this.newGameForm = this.formBuilder.group({
      'players': this.formBuilder.array([
        this.formBuilder.group({
          name: ['', Validators.required, Validators.minLength(4)],
          sign: ['o']
        }),
        this.formBuilder.group({
          name: ['', Validators.required, Validators.minLength(4)],
          sign: ['x']
        })
      ])
    })
  }

  startGame(): void {
    this.gameService.addGame(this.newGameForm.value.players).then(game => {
      this.router.navigate(['/game', game.id])
    });
  }
}
