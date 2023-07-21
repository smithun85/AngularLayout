import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import Chart from 'chart.js/auto';
import { DatePipe } from '@angular/common' //date can be converted in typescript to this format 'yyyy-MM-dd'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather-graph',
  templateUrl: './weather-graph.component.html',
  styleUrls: ['./weather-graph.component.scss']
})
export class WeatherGraphComponent implements OnInit {

  calenderForm:FormGroup | any
  weather_Result: any[] = [];
  result_object = {};
  temp = {}
  tempArr: any[] = []
  citiesName: any[] = []
  filteredCity: any
  changeCity:any = ''

  y_ValuesLoop: any[] = []

  //Graph:
  chart: any = [];

  constructor(private weatherService: WeatherService, private datepipe:DatePipe) { }


  ngOnInit() {
    this.calenderForm = new FormGroup({
      from_Date : new FormControl(''),
      to_Date : new FormControl('')
    })

    this.getWeatherData();
    this.getChart();
  };


  getWeatherData() {
    // Subscribe to each observable in the array individually
    this.weatherService.getWeather()
      .forEach((subscriber) => {
        subscriber.subscribe(
          (result: any) => {
            // console.log(result);

            Object.assign(this.result_object, result)
            Object.assign(this.result_object, { 'forecast': { date: '', forecastday: [] } });

            let resultArr = []
            for (let i = 0; i < 5; i++) {
              const date = new Date('2023-07-20'); // current date
              const nextDate = new Date(date.setDate(date.getDate() + i)).toDateString(); // add 'i' days to current date
              let changeDateFormat = this.datepipe.transform(nextDate, 'yyyy-MM-dd')  //convert date format
              let tempArr = [];
              let temp_c = {}
              for (let j = 0; j < 24; j++) {
                temp_c = { ...Object.assign(result.current, { 'temp_c': Math.floor(Math.random() * 100), 'wind_kph': Math.floor(Math.random() * 100) }) };
                tempArr.push(temp_c);
              }

              let dateUpdate = { ...Object.assign(this.result_object, { 'forecast': { date: changeDateFormat, forecastday: tempArr } }) }

              resultArr.push(dateUpdate)
              // console.log(resultArr);
            }
            this.weather_Result.push(resultArr);
            // console.log(this.weather_Result);

          },
          (error: any) => {
            // Handle the error if necessary
            console.error(error);
          }
        );
      });
  }

  changedCity(e: any) {
    this.changeCity = e.target.value
    // console.log(e.target.value);
    
      this.filteredCity = this.citiesName.filter((city: any) => {
        return city.toLowerCase().includes(e.target.value.toLowerCase())
      })
      // console.log("filteredCity:", this.filteredCity);
  
      this.chart.destroy()
      this.getChart() 
      this.y_ValuesLoop = []
  // if(!e.target){
  //   this.chart.destroy()
  //   this.getChart() 
  // }


  };




  getChart() {

    let x_Values: any[] = []
    let y_Values: any[] = [];


    setTimeout(() => {
      this.weather_Result.map((result: any) => {
        let date: string[] = []
        let forecastday: any[] = []

        result.map((cities: any) => {
          // console.log(cities.location.name);  
          this.citiesName.push(cities.location.name)
          //  console.log(citiesName);


          let tempArr: any = []
          let y_days: any = []

          cities.forecast.forecastday.map((temp: any) => {
            //  console.log(temp.temp_c);
            tempArr.push(temp.temp_c)
          })

          date.push(cities.forecast.date)
          // console.log(tempArr);
          forecastday.push(tempArr)
          // console.log(forecastday);  
        })
        this.citiesName = [...new Set(this.citiesName)]

        
        x_Values = date
        y_Values.push(forecastday)
      })

      // console.log(this.citiesName);
      // console.log(y_Values);

      for (let i = 0; i < y_Values.length; i++) {
        // console.log(this.changeCity,this.citiesName[i]);
        let index = this.citiesName.indexOf(this.changeCity)
        if(index !== -1){         
          this.y_ValuesLoop = []
          this.y_ValuesLoop.push({
            data:y_Values[index],
            label:this.citiesName[index],
            borderWidth: 3,
          })
        }else{        
          this.y_ValuesLoop.push({
            data: y_Values[i],
            borderWidth: 3,
            label: this.citiesName[i]
          })
        }
       
      }
      
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: x_Values,  //dynamic data for x-axis label
          datasets: this.y_ValuesLoop
        },
        options: {
          animation: false,
          plugins: {
            legend: {
              display: true
            },
            tooltip: {
              enabled: true
            }
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }, 200)
  }

  onSubmit() {
    this.chart.destroy()
    this.getChart() 
    this.y_ValuesLoop = []

    console.log(this.calenderForm.value);
  }

}
