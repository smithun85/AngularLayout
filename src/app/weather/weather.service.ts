import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

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
  

  getWeather(): Observable<any>{
  return this.params.map( (params:any)=>{
      return this.http.get(this.url,{'params':params, 'headers':this.headers})
      
  })
  }
}
