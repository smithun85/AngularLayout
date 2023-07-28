import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchingGameComponent } from './matching-game/matching-game.component';
import { GamesRoutingModule } from './games-routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GamesComponent } from './games.component';



@NgModule({
  declarations: [
    MatchingGameComponent,
    GamesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    GamesRoutingModule,
  ],
})
export class GamesModule { }
