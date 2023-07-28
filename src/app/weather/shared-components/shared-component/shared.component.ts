import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators ,  AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { WeatherService } from '../../weather.service';
import { SharedDataService } from '../shared-data-service';
import { DatePipe } from '@angular/common';
// import { dateValidator } from '../date-validator';


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

  constructor( 
    private datepipe: DatePipe, 
    private weatherService: WeatherService,
    private SharedDataService:SharedDataService
  ){};
  @Input() date:any
  @Output() newFromEvent = new EventEmitter<any>();
  @Output() newChangeCityEvent = new EventEmitter<any>()

  ngOnInit(): void {
    this.getWeatherData()
    this.calenderForm = new FormGroup({
      city:new FormControl(''),
      from_Date: new FormControl('', Validators.required),
      to_Date: new FormControl('', Validators.required),
    }, {validators:this.dateValidator});

    this.SharedDataService.setDate(this.date)
  };

  //dateValidation
  dateValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const start = control.get('from_Date');
    const end = control.get('to_Date');
    // console.log("validators called");  
    // console.log(start?.value);
    let startDate =this.date[0];
    let endDate = this.date[this.date.length];
   
    for(let i=0; i<this.date.length; i++){
     
    }
    // (this.date[0]<=start?.value<=this.date[this.date.length] || this.date[0]<=end?.value<=this.date[this.date.length])
    return start?.value !== null && end?.value !== null && start?.value < end?.value 
    && (start?.value>=this.date[0] && start?.value <=this.date[this.date.length-1]) && (end?.value>=this.date[0] && end?.value <=this.date[this.date.length-1]) ? null :{ dateValid:true };
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
     // stop here if form is invalid
     if (this.calenderForm.invalid) {
      this.calenderForm.markAllAsTouched()
      return;
  }
    this.newFromEvent.emit(this.calenderForm.value)
  }
}
