import { Component, Input } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-calender',
  templateUrl: './weather-calender.component.html',
  styleUrls: ['./weather-calender.component.scss']
})
export class WeatherCalenderComponent {
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
