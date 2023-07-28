import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {

    game_Link:{title:string,path:string}[] = [
        {
            title:'matching-game',
            path:'matching-game'
        }
    ]
}