import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  result:any[] = [];
  dataBase:any
  // apiData:Dexie.Table<any, string> // Define a table for your API data

  url:string =  'https://weatherapi-com.p.rapidapi.com/history.json';
  params:any = [
  {
    q: 'London',
    dt: '2023-07-11',
    lang: 'en'    
  },
  {
    q: 'India',
    dt: '2023-07-11',
    lang: 'en'    
},
{
  q: 'Pakistan',
  dt: '2023-07-11',
  lang: 'en'    
},
{
  q: 'China',
  dt: '2023-07-11',
  lang: 'en'    
},
];

headers:any = {
  'X-RapidAPI-Key': 'ee3d4ebb25msh2232b97ffce7c5ap13b2b2jsn7bc4ae63de02',
  'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
}

constructor(private http:HttpClient) { 
  // this.dataBase = new Dexie('weather_DataBase');
  // this.dataBase.version(1).stores({
  //   Weather_Data: '++id, results' // Customize the properties based on your needs
  // }); 

  // this.apiData = this.dataBase.table('apiData'); // Create a table for API data
};

// addAPIWeatherData(): Promise<any> {
//   return this.apiData.bulkAdd(this.result)
// }

// getAPIWeatherData(): Promise<any[]> {
//   return this.apiData.toArray();
// }
  

  getWeather(): Observable<any>{
  return this.params.map( (params:any)=>{
      return this.http.get(this.url,{'params':params, 'headers':this.headers})
   })

  };


//    add() {
//     var request = this.dataBase.transaction(["weather"], "readwrite")
//     .objectStore("weather")
//     .add({ id: "01", name: "prasad", age: 24, email: "prasad@tutorialspoint.com" });
    
//     request.onsuccess = function(event:any) {
//        alert("Prasad has been added to your database.");
//     };
    
//     request.onerror = function(event:any) {
//        alert("Unable to add data\r\nPrasad is already exist in your database! ");
//     }
//  }

// readAll() {
//   var objectStore = this.dataBase.transaction("employee").objectStore("employee");
  
//   objectStore.openCursor().onsuccess = function(event:any) {
//      var cursor = event.target.result;
//   };
// }

}
