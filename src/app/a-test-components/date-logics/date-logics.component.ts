import { Component } from '@angular/core';

@Component({
  selector: 'app-date-logics',
  templateUrl: './date-logics.component.html',
  styleUrls: ['./date-logics.component.scss']
})
export class DateLogicsComponent {

  countDown_hour:number = 3;
  countDown_min:number = 30;
  countDown_sec:number = 5;

  // Required: 12hours : 01minute
 public duration:string = "00:00"
 public formattedTime:string
  constructor(){
    // add hours and minutes in time;
    let [hours,minutes] = this.duration.split(":"); //split convert the string into substring in array
    
    // Adding "hour" or "hours" based on the value of hours;
    let hoursStr = hours === "01" ? "hour" : "hours";
    let minutesStr = minutes === "01" ? "minute" : "minutes";
    // Creating the formatted string
    //  let formattedTime = `${hours}${hoursStr}${minutes}${minutesStr}`;
    this.formattedTime = `${hours}${hoursStr}:${minutes}${minutesStr}`;
    
  }

  ngOnInit(){
    this.countDown();
  }

  countDown():void{
    let setInterval_sec:any = setInterval( ()=>{
      this.countDown_sec--
      if(this.countDown_sec == 0){
        let setInterval_min = setInterval( ()=>{
          this.countDown_min--
          clearInterval(setInterval_min);
        })
        
        clearInterval(setInterval_sec);
        }
    },1000);
  
  }
}
