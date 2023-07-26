import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  // Create a BehaviorSubject to hold the data
  private weatherResultSubject = new BehaviorSubject<any>({});
  private selectedCitySubject = new BehaviorSubject<any>({});
  private calenderFormSubject = new BehaviorSubject<any>({});

  setData(response: any) {
    this.weatherResultSubject.next(response);
  }
  getData() {
    // Expose the BehaviorSubject as an observable to be accessed by the child component
    return this.weatherResultSubject.asObservable();
  }

  setCity(city:any){
    this.selectedCitySubject.next(city)
  };
  getCity(){
    return this.selectedCitySubject.asObservable()
  };

  setDate(date:any){
    this.calenderFormSubject.next(date)
  };
   getDate(){
    return this.calenderFormSubject.asObservable()
  }
}