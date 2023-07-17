import { Component } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})
export class CustomPipeComponent {
 title:string = "Angular customPipe";
 celsius:number | any;
 fahrenhiet?:number | any;


 obsValue1 = new Observable((observer) => {
  console.log("Observable starts")
  setTimeout(() => { 
    console.log("Returns value");
    observer.next("subscribed") }, 3000);
});

//shareReplay() method :the observable is subscribed only once and for every subsequent subscription, the previously received value is used.
obsValue = new Observable( (observer)=>{
  console.log("Observerable starts");
  setTimeout(()=>{
    console.log("returns Value");
    observer.next("Subscribed")},3000)
  }).pipe(shareReplay())
}
