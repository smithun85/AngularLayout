import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormControl, FormGroup } from '@angular/forms';
// import { SharedDataService } from '../shared-data-service';
import { DatePipe } from '@angular/common'; //date can be converted in typescript to this format 'yyyy-MM-dd'


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  
  calenderForm: FormGroup | any;
  from_Date: FormControl | any;
  to_Date: FormControl | any;
  isFormSubmitted: boolean = false;
  changeCity: any = '';



  weather_Result: any[] = [];
  result_object = {};
  temp = {}
  tempArr:any[] = []
  citiesName: any[] = [];

  timestamps: string[] = [];

  sortingData:any[]=[]

 

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
     private weatherService: WeatherService, 
    
     private datepipe: DatePipe,
     ) { }

  ngOnInit() {
    this.getWeatherData()
    this.calenderForm = new FormGroup({
      city:new FormControl(''),
      from_Date: new FormControl(''),
      to_Date: new FormControl(''),
    });
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
            const format = (num: number) => (num < 10 ? `0${num}` : `${num}`);
            for (let hour = 0; hour < hoursPerDay; hour++) {
              const amPM = hour < 12 ? 'AM' : 'PM';
              const displayHour = hour <= 12 ? hour : hour - 12;
              const time = `${format(displayHour)} ${amPM}`;
              temp_c = {
                ...Object.assign(result.current, {
                  temp_c: Math.floor(Math.random() * 100),
                  wind_kph: Math.floor(Math.random() * 100),
                  time:time,
                  city:result.location.name,
                  date:`${changeDateFormat} ${time}`
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
           // console.log(this.timestamps);
          // this.sharedDataService.setData(this.weather_Result);  //send response from parent to child using shared-service:
          // Arrange cities in an Array
          let cityArr:any[]=[]
          this.weather_Result.map( result =>{
            result.map((cities:any)=>{
              cityArr.push(cities.location.name)            
            })
            this.citiesName = [...new Set(cityArr)];
          })   ;
          
        },
        (error: any) => {
          // Handle the error if necessary
          console.error(error);
        }
      );
    });
  };

 
  changedCity(e: any) {
    // this.sharedDataService.setCity(e.target.value)
  }


  onSubmit() {
    this.isFormSubmitted = true;
    this.from_Date = this.calenderForm.get('from_Date').value;
    this.to_Date = this.calenderForm.get('to_Date').value;
    // this.sharedDataService.setDate(this.calenderForm.value)
    // console.log(this.calenderForm.value)
 
  }
}
