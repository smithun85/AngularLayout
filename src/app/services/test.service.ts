import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class TestService {
 url1:string = 'https://big8ads126.execute-api.eu-west-1.amazonaws.com/prod/stations?latitude=47.3742199&longitude=8.5228767&radius=10000';
 url2:string = 'https://big8ads126.execute-api.eu-west-1.amazonaws.com/prod/stations/02bc95239e9643ad4cccdd73b1b7a9a708e50e5f'
 url3:string = ' https://app.machinetohuman.com/v1/provisionings/5ecfcaefea752a33f108fbfa/pois?latitude=47.372943344793256&longitude=8.532610461115837&radius=6099';
headers = {
    'X-M2H-Partner': 'swisscom',
'X-M2H-Market': 'swisscom-ch',
'content-type': 'application/json',
'authorization': 'Bearer v164ddc993bd1c7e0f19a04cf1614a8d75a5380bb03a78a2b6',
'Accept-Language': 'en-US',
'x-static-map-width': '720',
'x-static-map-height':' 450',
'x-static-map-scale': '4',
'X-M2H-OS-Type': 'ios',
'X-M2H-Client-Version': '3.0.1',
'X-M2H-App-Id': 'starlight',
}
 constructor(private http:HttpClient){}

 getData1(){
    return this.http.get(this.url1)
 };

 getData2(){
    return this.http.get(this.url2)
 }

 getDataWithHeaders(){
    let headers = new HttpHeaders(this.headers)
    console.log(headers);
    return this.http.get(this.url3,{headers:headers})
 }

}