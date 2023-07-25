import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import Chart from 'chart.js/auto';
import { DatePipe } from '@angular/common'; //date can be converted in typescript to this format 'yyyy-MM-dd'
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-weather-graph',
  templateUrl: './weather-graph.component.html',
  styleUrls: ['./weather-graph.component.scss'],
})
export class WeatherGraphComponent implements OnInit {

  from_Date: any;
  to_Date: any;
  isFormSubmitted: boolean = false;

  weather_Result: any[] = [];
  result_object = {};
  temp = {};
  tempArr: any[] = [];
  citiesName: any[] = [];
  filteredCity: any;
  changeCity: any = '';

  
  //Graph:
  chart: any = [];
  y_ValuesLoop: any[] = [];

  // filered_Date
  dateWise_filteredData: any[] = [];

  constructor(
    private weatherService: WeatherService,
    private datepipe: DatePipe
  ) {}

  ngOnInit() {
    this.getWeatherData();
    this.getChart();
  };

  addSharedChangeCity(city:any){
    console.log(city);
    this.changeCity = city;
    this.chart.destroy();
    this.getChart();
    this.y_ValuesLoop = [];
  }
  addSharedFormData(formData:any){
    this.isFormSubmitted = true
    console.log(formData);
    this.changeCity = formData.city;
    this.from_Date = formData.from_Date;
    this.to_Date = formData.to_Date
    this.chart.destroy();
    this.getChart();
    this.y_ValuesLoop = [];
    
  }

  getWeatherData() {
    // Subscribe to each observable in the array individually
    this.weatherService.getWeather().forEach((subscriber) => {
      subscriber.subscribe(
        (result: any) => {
          // console.log(result);

          Object.assign(this.result_object, result);
          Object.assign(this.result_object, {
            forecast: { date: '', forecastday: [] },
          });

          let resultArr = [];
          for (let i = 0; i < 5; i++) {
            const date = new Date('2023-07-21'); // current date
            const nextDate = new Date(
              date.setDate(date.getDate() + i)
            ).toDateString(); // add 'i' days to current date
            let changeDateFormat = this.datepipe.transform(
              nextDate,
              'yyyy-MM-dd'
            ); //convert date format
            let tempArr = [];
            let temp_c = {};
            for (let j = 0; j < 24; j++) {
              temp_c = {
                ...Object.assign(result.current, {
                  temp_c: Math.floor(Math.random() * 100),
                  wind_kph: Math.floor(Math.random() * 100),
                }),
              };
              tempArr.push(temp_c);
            }

            let dateUpdate = {
              ...Object.assign(this.result_object, {
                forecast: { date: changeDateFormat, forecastday: tempArr },
              }),
            };

            resultArr.push(dateUpdate);
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
  };
  

  getChart() {
   console.log(this.changeCity);
    let x_Values: any[] = [];
    let y_Values: any[] = [];
    let forecastday: any[] = [];
    setTimeout(() => {
       // Y-AXIS:
      this.weather_Result.map((result: any) => {
        // console.log(result);       
        let tempArr: any = [];
        result.map((cities: any) => {
          // console.log(cities.location.name);
          this.citiesName.push(cities.location.name);
          //  console.log(citiesName);
          cities.forecast.forecastday.map((temp: any) => {
            //  console.log(temp.temp_c);
            tempArr.push(temp.temp_c);
          });
          // console.log(tempArr);
        });
        this.citiesName = [...new Set(this.citiesName)];
        y_Values.push(tempArr);
      });

      // X-AXIS:
      // 24-hours add with no of dates times
      this.weather_Result.map((result)=>{
        let date: any[] = [];

        if(this.isFormSubmitted){
         
          this.dateWise_filteredData = result.filter((item:any)=>{
           const dates = item.forecast.date
            return dates >= this.from_Date && dates <= this.to_Date
          })
          // console.log("Date:",this.dateWise_filteredData)
          this.dateWise_filteredData.map((cities: any) => {         
            // 24-hours add with no of dates times
            for (let i = 0; i < 24; i++) {
              date.push(i + '\n' + cities.forecast.date);
            }
        })
        }else{
          result.map((cities: any) => {         
            // 24-hours add with no of dates times
            for (let i = 0; i < 24; i++) {
              date.push(i + '\n' + cities.forecast.date);
            }
        })
        }
        
      x_Values = date;
    })
  
      // console.log(x_Values);
      // console.log(this.citiesName);
      // console.log(y_Values);
     
        
        // this.changeCity = city
        // console.log(this.changeCity);
        // console.log(this.citiesName);
      for (let i = 0; i < y_Values.length; i++) {       
        // console.log(this.changeCity,this.citiesName[i]);
        let index = this.citiesName.indexOf(this.changeCity);
        // console.log(index);
        // console.log(this.citiesName[index]);
        if (index !== -1) {
          this.y_ValuesLoop = [];
          this.y_ValuesLoop.push({
            data: y_Values[index],
            label: this.citiesName[index],
            borderWidth: 3,
          });
        } else {
          this.y_ValuesLoop.push({
            data: y_Values[i],
            borderWidth: 3,
            label: this.citiesName[i],
          });       
        }
      }



      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: x_Values, //dynamic data for x-axis label
          datasets: this.y_ValuesLoop,
        },
        options: {
          animation: false,
          plugins: {
            legend: {
              display: true,
            },
            tooltip: {
              enabled: true,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }, 200);
  }

}
