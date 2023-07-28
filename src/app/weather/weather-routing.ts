import { RouterModule, Routes } from "@angular/router";
import { WeatherComponent } from "./weather/weather.component";
import { WeatherGraphComponent } from "./weather-graph/weather-graph.component";
import { WeatherTableComponent } from "./weather-table/weather-table.component";
import { WeatherCalendarComponent } from "./weather-calendar/weather-calendar.component";
import { NgModule } from "@angular/core";
const routes:Routes = [
    {
        path:'',
        redirectTo:'table',
        pathMatch:'full'
      },
    {
        path:'',
        component:WeatherComponent,
        children:[
            {
                path:'graph',
                component:WeatherGraphComponent
            },
            {
                path:'table',
                component:WeatherTableComponent
            },
            {
                path:'calender',
                component:WeatherCalendarComponent
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class WeatherRoutingModule{}