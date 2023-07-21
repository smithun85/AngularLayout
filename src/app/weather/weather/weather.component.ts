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
   weather_Result: any[] = [];
  result_object = {};
  temp = {}
  tempArr:any[] = []

 

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

  constructor(private router: Router, private weatherService: WeatherService) { }

  ngOnInit() {
    // this.getWeatherData();
  }

  getWeatherData() {
    // Subscribe to each observable in the array individually
    this.weatherService.getWeather()
    .forEach((subscriber) => {
      subscriber.subscribe(
        (result: any) => {
          console.log(result);
         
          Object.assign(this.result_object, result)
          Object.assign(this.result_object, { 'forecast': { date: '', forecastday:[]}});        

          let resultArr = []
            for (let i = 0; i < 5; i++) {
              const date = new Date('2023-07-20'); // current date
              const nextDate = new Date(date.setDate(date.getDate() + i)).toDateString(); // add 'i' days to current date
            
              let tempArr = [];
              let temp_c = {}
              for (let j = 0; j < 24; j++) {
                temp_c = { ...Object.assign(result.current,{ 'temp_c': Math.floor(Math.random() * 100) }) };   
                tempArr.push(temp_c);            
              }
              
             let dateUpdate = {...Object.assign(this.result_object, { 'forecast': { date: nextDate, forecastday:tempArr}})}
          
             resultArr.push(dateUpdate)
            // console.log(resultArr);
            }
            this.weather_Result.push(resultArr);
            console.log(this.weather_Result);
           
        },
        (error: any) => {
          // Handle the error if necessary
          console.error(error);
        }
      );
    });
  }

  onGraph() {
    this.router.navigate(['/graph']);
    console.log('welcome');
  }
}
