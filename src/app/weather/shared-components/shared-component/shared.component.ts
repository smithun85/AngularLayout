import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from '../../weather.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit{

  calenderForm: FormGroup | any;
  calenderFormValue: any;
  isSubmitted:boolean = false

  weather_Result: any[] = [];
  result_object = {};
  temp = {}
  tempArr:any[] = []
  citiesName: any[] = [];

  constructor( private datepipe: DatePipe, private weatherService: WeatherService ){};

  @Output() newFromEvent = new EventEmitter<any>();
  @Output() newChangeCityEvent = new EventEmitter<any>()

  ngOnInit(): void {
    this.getWeatherData()
    this.calenderForm = new FormGroup({
      city:new FormControl('',Validators.required),
      from_Date: new FormControl('', Validators.required),
      to_Date: new FormControl('', Validators.required),
    });
  };

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
         
          let cityArr:any[]=[]
          this.weather_Result.map( result =>{
            result.map((cities:any)=>{
              cityArr.push(cities.location.name)            
            })
            this.citiesName = [...new Set(cityArr)];
            // console.log(this.citiesName);
          })        
        },
        (error: any) => {
          // Handle the error if necessary
          console.error(error);
        }
      );
    });
  };

  changedCity(e: any) {
   this.newChangeCityEvent.emit(e.target.value)
  }


  onSubmit() {
    this.isSubmitted = true
    // console.log("this.calenderForm:", this.calenderForm.value);
    this.newFromEvent.emit(this.calenderForm.value)
  }
}
