import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  APIKEY = "c77e50d7429f51b71724d5c4d8082b14"

  constructor(
    private http: HttpClient
  ) { }

  getWeather(location: any){
    return this.http.get('http://api.weatherstack.com/current?access_key=' + this.APIKEY + '&query=' + location);
  }
}
