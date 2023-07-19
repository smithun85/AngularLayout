import { Component, Input } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.scss']
})
export class WeatherTableComponent {
  weather_Data: any[] = [];

  constructor(
    private weatherService: WeatherService,
  ) {}

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData() {
    // Subscribe to each observable in the array individually
    this.weatherService.getWeather().forEach((subscriber) => {
      subscriber.subscribe(
        (result: any) => {
          this.weather_Data.push(result);
          console.log(this.weather_Data);
        },
        (error: any) => {
          // Handle the error if necessary
          console.error(error);
        }
      );
    });
  }

}
