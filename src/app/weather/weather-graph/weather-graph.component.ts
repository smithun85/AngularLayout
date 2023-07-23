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
export class WeatherGraphComponent {
  calenderForm:FormGroup | any
  from_Date:FormControl |any
  to_Date:FormControl |any
  isFormSubmitted:boolean = false

  weather_Result: any[] = [];
  result_object = {};
  temp = {}
  tempArr: any[] = []
  citiesName: any[] = []
  filteredCity: any
  changeCity:any = ''

  y_axis: any[] = []
  x_axis:any[] = []

  //Graph:
  chart: any = [];

  // filered_Date
  dateWise_filteredData:any[] = []

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
    this.weatherService.getWeather().subscribe((result:any)=>{
      this.weather_Result = result
    })
      // .forEach((subscriber) => {
      //   subscriber.subscribe(
      //     (result: any) => {
      //       // console.log(result);

      //       Object.assign(this.result_object, result)
      //       Object.assign(this.result_object, { 'forecast': { date: '', forecastday: [] } });

      //       let resultArr = []
      //       for (let i = 0; i < 5; i++) {
      //         const date = new Date('2023-07-20'); // current date
      //         const nextDate = new Date(date.setDate(date.getDate() + i)).toDateString(); // add 'i' days to current date
      //         let changeDateFormat = this.datepipe.transform(nextDate, 'yyyy-MM-dd')  //convert date format
      //         let tempArr = [];
      //         let temp_c = {}
      //         for (let j = 0; j < 24; j++) {
      //           temp_c = { ...Object.assign(result.current, { 'temp_c': Math.floor(Math.random() * 100), 'wind_kph': Math.floor(Math.random() * 100) }) };
      //           tempArr.push(temp_c);
      //         }

      //         let dateUpdate = { ...Object.assign(this.result_object, { 'forecast': { date: changeDateFormat, forecastday: tempArr } }) }

      //         resultArr.push(dateUpdate)
      //         // console.log(resultArr);
      //       }
      //       this.weather_Result.push(resultArr);
            console.log(this.weather_Result);                  //response

      //     },
      //     (error: any) => {
      //       // Handle the error if necessary
      //       console.error(error);
      //     }
      //   );
      // });
  }

  changedCity(e: any) {
    this.changeCity = e.target.value
    // console.log(e.target.value);
    
      this.filteredCity = this.citiesName.filter((city: any) => {
        return city.toLowerCase().includes(e.target.value.toLowerCase())
      })
      // console.log("filteredCity:", this.filteredCity);
      this.y_axis = []
      this.chart.destroy()
      this.getChart() 
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
        y_Values.push(forecastday);
      
      })

     
      for(let i = 0; i<x_Values.length; i++){   
        const hours:any[] = [] 
        for( let j=1; j<=24; j++){         
          hours.push(j);
          // console.log(hours)
          }
         this.x_axis = hours
        //  console.log(this.x_axis)
      }
      console.log(this.x_axis)
      

      // console.log(this.citiesName);
      console.log("y-Axis:",y_Values);
      console.log("x-Axis:",x_Values)

      for (let i = 0; i < y_Values.length; i++) {
        // console.log(this.changeCity,this.citiesName[i]);
        let index = this.citiesName.indexOf(this.changeCity)
        let y_axis_temp:any[] = []
       y_Values[i].map((item:any)=>{
        y_axis_temp = item
       });
       
        if(index !== -1){         
          this.y_axis = []
          this.y_axis.push({
            data:y_axis_temp,
            label:this.citiesName[index],
            borderWidth: 3,
          })
        }else{       
          this.y_axis.push({
            data: y_axis_temp,
            borderWidth: 3,
            label: this.citiesName[i]
          })
        }  
        
        // if(this.isFormSubmitted){        
        //   this.x_axis = x_Values.filter( item=>{
        //   return item >= this.from_Date && item <= this.to_Date
        //   })
        //   // console.log(this.x_axis)
        //  }else{
        //    this.x_axis = x_Values
        //  }
      }

    
      
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.x_axis,  //dynamic data for x-axis label
          datasets: this.y_axis
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
    this.isFormSubmitted = true;
    this.x_axis = []
    this.y_axis = [];
    this.chart.destroy()
    this.getChart() 
   

    

   this.from_Date = this.calenderForm.get('from_Date').value;
   this.to_Date = this.calenderForm.get('to_Date').value
    this.weather_Result.map(weather=>{
      // console.log(weather)
      this.dateWise_filteredData = weather.filter((item:any)=>{
        const date = item.forecast.date
        return date >= this.from_Date && date <= this.to_Date
        // console.log("Date:",item.forecast.date) 
      })
    })

    // console.log(this.from_Date,this.to_Date);
    // // console.log(this.calenderForm.value.from_Date)
    // console.log(this.dateWise_filteredData)
  }
}
