import { Component } from '@angular/core';

@Component({
  selector: 'app-date-logics',
  templateUrl: './date-logics.component.html',
  styleUrls: ['./date-logics.component.scss']
})
export class DateLogicsComponent {
 public duration:string = "00:00"
  constructor(){
    // add hours and minutes in time;
    let [hours,minutes] = this.duration.split(":"); //split convert the string into substring in array
    
    // Adding "hour" or "hours" based on the value of hours;
    let hoursStr = hours === "01" ? "hour" : "hours";
    let minutesStr = minutes === "01" ? "minute" : "minutes";
    // Creating the formatted string
     let formattedTime = `${hours}${hoursStr}${minutes}${minutesStr}`;
  }
}
