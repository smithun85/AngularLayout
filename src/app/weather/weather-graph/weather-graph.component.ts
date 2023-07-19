import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-weather-graph',
  templateUrl: './weather-graph.component.html',
  styleUrls: ['./weather-graph.component.scss']
})
export class WeatherGraphComponent implements OnInit {

  weather_Data:any[]=[];
  chart: any = [];
  hour:any = []

  constructor(private weatherService: WeatherService){}

  
  ngOnInit() {
    this.getWeatherData();
    this.getChart();
  };
  

  getWeatherData() {
    // Subscribe to each observable in the array individually
    this.weatherService.getWeather().forEach((subscriber) => {
      subscriber.subscribe(
        (result: any) => {
          this.weather_Data.push(result);
         console.log(this.weather_Data);
       
          // result.forecast.forecastday.map( (data:any) => {
          //   console.log(data.hour);
          //   this.hour = data.hour
          // })
            
          result.forecast.forecastday.map( (data:any, i:number) => {
            console.log(data.hour);
            this.hour.push(data.hour)
          })
        }),
        (error: any) => {
          // Handle the error if necessary
          console.error(error);
        }
    });
  }

  getChart(){
   
    setTimeout( ()=>{
      console.log(this.hour);
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: [`00:00 AM`, `2:00 AM`, `4:00 AM`, `6:00 AM`, `8:00 AM`, `10:00 AM`, `12:00 AM`, `02:00 
          PM`, `04:00 PM`, `06:00 PM`, `08:00 PM`, `10:00 PM`],
          datasets: [
            {
              label: 'London',
              data: this.hour[0].map( (hour:any)=> hour.temp_c),
                     
              borderWidth: 1,
            },
            {
              label: 'New Delhi',
              data:this.hour[1].map( (hour:any)=> hour.temp_c) ,
                     
              borderWidth: 2,
            },
            {
              label: 'Kranchi',
              data:this.hour[2].map( (hour:any)=> hour.temp_c) ,
                     
              borderWidth: 2,
            },
            {
              label: 'china',
              data:this.hour[3].map( (hour:any)=> hour.temp_c) ,
                     
              borderWidth: 2,
            },
          ],
        },
        options: {
          animation: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
     },2000)
  }

}
