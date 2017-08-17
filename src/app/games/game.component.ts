import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './game.component.html',
})
export class Game implements OnInit  {
  currentplayer: String

  constructor( private route: ActivatedRoute, private element: ElementRef, private renderer: Renderer ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.currentplayer = 'playerone';
  }

  makeMove(event, x, y): void {
    if (!event.target.classList.contains('active')) {
      // Append new class. I don't know a other solution yet.
      event.target.className = event.target.className + ' active';
      this.currentplayer = ((this.currentplayer == 'playerone') ? 'playertwo' : 'playerone')
    }
  }
}
