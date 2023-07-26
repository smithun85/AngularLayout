import { Component, Input } from '@angular/core';
import { WeatherService } from '../weather.service';
import { DatePipe } from '@angular/common';

import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-weather-calender',
  templateUrl: './weather-calender.component.html',
  styleUrls: ['./weather-calender.component.scss']
})
export class WeatherCalenderComponent {
  weather_Data: any[] = [];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
      { title: 'Meeting', start: new Date() }
    ]
  };
  


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
    weather_Response: any[] = [];
    weather_flatttedResult : any[] = [];
    dateArr:any=[]
    //sorting
    sortType:string = "city";
    reverse:boolean = false;
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
          //Add date
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
            const format = (num: number) =>
              num < 10 ? `0${num}:00` : `${num}:00`;
            for (let hour = 0; hour < hoursPerDay; hour++) {
              const amPM = hour < 12 ? 'AM' : 'PM';
              const displayHour = hour <= 12 ? hour : hour - 12;
              const time = `${format(displayHour)} ${amPM}`;

              temp_c = {
                ...Object.assign(result.current, {
                  temp_c: Math.floor(Math.random() * 100),
                  wind_kph: Math.floor(Math.random() * 100),
                  time: time,
                  city: result.location.name,
                  // date:`${changeDateFormat} ${time}`,
                  date: changeDateFormat,
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

          //reduce nested array in a array:
          const initialValue: any = [];
          this.weather_Response = this.weather_Result.reduce(
            (total: any, current: any) => total.concat(current),
            initialValue
          );
          // console.log(this.weather_Response);

          //Add all date-wise data in a single array:
          let flattedArr: any = [];
          this.weather_Response.map((data: any) => {
            flattedArr.push(data.forecast.forecastday);
            // console.log(data.forecast.forecastday.reduce( (total:any,curr:any)=> total.concat(curr),[]));
          });
          // console.log(flattedArr);

          this.weather_flatttedResult = flattedArr.reduce(
            (total: any, curr: any) => total.concat(curr),
            []
          );
          this.response = this.weather_flatttedResult;
          // console.log(this.weather_flatttedResult);

          //Add cities in an array
          this.weather_Result.map((result: any) => {
            // console.log(result);
            let tempArr: any = [];
            result.map((cities: any) => {
              // console.log(cities.forecast.date);
              this.citiesName.push(cities.location.name);
              this.dateArr.push(cities.forecast.date)
              //  console.log(citiesName);
            });
            this.citiesName = [...new Set(this.citiesName)];
            this.dateArr = [...new Set(this.dateArr)]
            // console.log(this.dateArr);
          });
        },
        (error: any) => {
          // Handle the error if necessary
          console.error(error);
        }
      );
    });
  }

  // Select city
  addSharedChangeCity(city:any){
    this.changeCity = city

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
      
      
  };
}
