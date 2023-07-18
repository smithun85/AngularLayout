import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';
import { WeatherGraphComponent } from './weather-graph/weather-graph.component';
import { WeatherTableComponent } from './weather-table/weather-table.component';
import { WeatherCalenderComponent } from './weather-calender/weather-calender.component';
import { WeatherRoutingModule } from './weather-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    WeatherComponent,
    WeatherGraphComponent,
    WeatherTableComponent,
    WeatherCalenderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    WeatherRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[
    RouterModule,
    // WeatherComponent,
    //  WeatherGraphComponent,
    // WeatherTableComponent,
    // WeatherCalenderComponent
  ]
})
export class WeatherModule { }
