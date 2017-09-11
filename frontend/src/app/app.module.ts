import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { PageNotFoundComponent } from './404.component';

import { GamePlay } from './games/play.component'
import { NewGame } from './games/new.component';
import { PlayerHandlingDirective } from './games/gamesboard.directive';

import { GameService } from './games/game.service';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'game', component: NewGame },
  { path: 'game/:id', component: GamePlay },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    GamePlay,
    NewGame,
    PlayerHandlingDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
