import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';
import { WeatherGraphComponent } from './weather-graph/weather-graph.component';
import { WeatherTableComponent } from './weather-table/weather-table.component';
import { WeatherCalendarComponent } from './weather-calendar/weather-calendar.component';
import { WeatherRoutingModule } from './weather-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FullCalendarModule } from '@fullcalendar/angular';
import { SharedComponent } from './shared-components/shared-component/shared.component';

@NgModule({
  declarations: [
    WeatherComponent,
    WeatherGraphComponent,
    WeatherTableComponent,
    WeatherCalendarComponent,
    SharedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    WeatherRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FullCalendarModule // register FullCalendar with your app
  ],
  exports:[
    RouterModule,
  ],
  providers: [DatePipe]
})
export class WeatherModule { }
