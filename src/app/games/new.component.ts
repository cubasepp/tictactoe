import { Component, OnInit }                  from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './new.component.html',

})
export class NewGame implements OnInit {
  newGameForm: FormGroup

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.newGameForm = new FormGroup({
      'playerone': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'playertwo': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  get playerone() { return this.newGameForm.get('playerone'); }
  get playertwo() { return this.newGameForm.get('playertwo'); }

  startGame(postData): void {
    console.log(JSON.stringify(postData));
  }
}
