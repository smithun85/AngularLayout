import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  result: any[] = [];
  dataBase: any;
  // apiData:Dexie.Table<any, string> // Define a table for your API data
  startData: Date = new Date('2023-07-11');
  endDate: Date = new Date('2023-07-11');

  url: string = 'https://weatherapi-com.p.rapidapi.com/current.json';

  params:any = [
    {q: 'India'},
    {q: 'London'},
    {q:'Pakistan'}
  ]

  // params: any = [
  //   {
  //     q: 'India',
  //     days: '5',
  //   },
  //   {
  //     q: 'London',
  //     days: '5',
  //   },
  //   {
  //     q: 'Pakistan',
  //     days: '5',
  //   },
  //   {
  //     q: 'China',
  //     days: '5',
  //   },
  // ];

  headers: any = {
    'X-RapidAPI-Key': 'ee3d4ebb25msh2232b97ffce7c5ap13b2b2jsn7bc4ae63de02',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  };

  constructor(private http: HttpClient) {
    // this.dataBase = new Dexie('weather_DataBase');
    // this.dataBase.version(1).stores({
    //   Weather_Data: '++id, results' // Customize the properties based on your needs
    // });
    // this.apiData = this.dataBase.table('apiData'); // Create a table for API data
  }

  // addAPIWeatherData(): Promise<any> {
  //   return this.apiData.bulkAdd(this.result)
  // }

  // getAPIWeatherData(): Promise<any[]> {
  //   return this.apiData.toArray();
  // }

  getWeather(): Observable<any> {
    return this.params.map((params: any) => {
      return this.http.get(this.url, { params: params, headers: this.headers });
    });
  }

}
