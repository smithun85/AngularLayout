import { Component, Input } from '@angular/core';
import { WeatherService } from '../weather.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.scss']
})
export class WeatherTableComponent {
  weather_Result: any[] = [];
  response: any[] = [];
  result_object = {};
  temp = {}
  tempArr:any[] = []

  isFormSubmitted: boolean = false;
  changeCity:any;
  citiesName: any[] = [];
  from_Date: any;
  to_Date: any;
    // filered_Date
    dateWise_filteredData: any[] = [];

    //sorting
    sortType:string = "city";
    reverse:boolean = false;
    sortBy:string= "asc";
    sortedCityData:any[]=[];
    sortedForecastdayData:any[] = []
    
  

  constructor(
    private weatherService: WeatherService,
    private datepipe: DatePipe,
  ) {}

  ngOnInit() {
    this.getWeatherData();
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
            const hoursPerDay = 24;
            const format = (num: number) => (num < 10 ? `0${num}:00` : `${num}:00`);
            for (let hour = 0; hour < hoursPerDay; hour++) {
              const amPM = hour < 12 ? 'AM' : 'PM';
              const displayHour = hour <= 12 ? hour : hour - 12;
              const time = `${format(displayHour)} ${amPM}`;
             

              temp_c = {
                ...Object.assign(result.current, {
                  temp_c: Math.floor(Math.random() * 100),
                  wind_kph: Math.floor(Math.random() * 100),
                  time:time
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
          console.log(this.weather_Result);

          //Add cities in an array
          this.weather_Result.map((result: any) => {
            // console.log(result);       
            let tempArr: any = [];
            result.map((cities: any) => {
              // console.log(cities.location.name);
              this.citiesName.push(cities.location.name);
              //  console.log(citiesName);
           
            });
            this.citiesName = [...new Set(this.citiesName)]; 
          });
        },
        (error: any) => {
          // Handle the error if necessary
          console.error(error);
        }
      );
    });
    this.response = this.weather_Result
  };

  // Select city
  addSharedChangeCity(city:any){
    this.changeCity = city
    let changedCity:any = []
    // console.log(city);
    this.response = []
  
    // 
     

      let index = this.citiesName.indexOf(this.changeCity);
      // console.log(index);
      if(index !== -1){
        this.response.push(this.weather_Result[index])
      }else{
        this.getWeatherData();
      }
  }

  // Submit Form
  addSharedFormData(formData:any){
    this.isFormSubmitted = true
    // console.log(formData);
    this.changeCity = formData.city;
    this.from_Date = formData.from_Date;
    this.to_Date = formData.to_Date
    this.response = []
     

     if(this.changeCity){
      let index = this.citiesName.indexOf(this.changeCity);
      console.log(index);
      if(index !== -1){
        this.response.push(this.weather_Result[index])
      }
      this.response.map( (city:any)=>{
        this.dateWise_filteredData = city.filter( (item:any)=>{
           console.log(item.forecast.date);
           const dates = item.forecast.date
           return dates >= this.from_Date && dates <= this.to_Date
         })
       })
       this.response = []
       this.response.push(this.dateWise_filteredData)
     }
    //  else{
    //     this.weather_Result.map( result=>{
    //       result.map((item:any)=>{
    //         console.log(item.forecast.date);
    //         const dates = item.forecast.date
    //         return dates >= this.from_Date && dates <= this.to_Date
    //       })
    //     })
    //      this.response.push(this.dateWise_filteredData)
    //  }
      
      
  };

  // sorting by date:
  clickSortDate(key:any){
    this.sortType = key;
    this.reverse = !this.reverse;
    let direction = this.reverse ? 1 : -1;
    this.weather_Result.map( (result:any)=>{
      console.log(result);
      result.map( ()=>{

      })
    })
  }

  clickSort(key:any){
    this.sortType = key;
    this.reverse = !this.reverse;
    let direction = this.reverse ? 1 : -1;
    this.weather_Result.map( (result:any)=>{
      // console.log(result);
      result.map( (forecastData:any)=>{
        // console.log(forecastData.forecast.forecastday);
        forecastData.forecast.forecastday.sort( (a:any, b:any)=>{
          // console.log(a[key],b[key]);
          if(a[key] < b[key]){  
            return -1 * direction
          }else if(a[key] > b[key]){
            return 1*direction
          }else{
            return 0;
          }
        })      
       
      })
    })
  }

}
