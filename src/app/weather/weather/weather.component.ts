import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';
import { liveQuery } from 'dexie';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weather_Data: any[] = [];

  weather_menu = [
    {
      title: 'Graph',
      path: 'graph',
      icon: '',
    },
    {
      title: 'Table',
      path: 'table',
      icon: '',
    },
    {
      title: 'Calender',
      path: 'calender',
      icon: '',
    },
  ];

  constructor(
    private router: Router,
    private weatherService: WeatherService,
  ) {}

  ngOnInit() {
    // this.getWeatherData();
  }

  // getWeatherData() {
  //   // Subscribe to each observable in the array individually
  //   this.weatherService.getWeather().forEach((subscriber) => {
  //     subscriber.subscribe(
  //       (result: any) => {
  //         this.weather_Data.push(result);
  //         console.log(this.weather_Data);
  //       },
  //       (error: any) => {
  //         // Handle the error if necessary
  //         console.error(error);
  //       }
  //     );
  //   });
  // }

  onGraph() {
    this.router.navigate(['/graph']);
    console.log('welcome');
  }
}
