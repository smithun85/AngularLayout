import { RouterModule, Routes } from "@angular/router";
import { MatchingGameComponent } from "./matching-game/matching-game.component";
import { NgModule } from "@angular/core";
import { GamesComponent } from "./games.component";

const routes:Routes = [
    {
        path:'',
        component:GamesComponent,
        children:[
            {
                path:'matching-game',
                component:MatchingGameComponent
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
})
export class GamesRoutingModule{}