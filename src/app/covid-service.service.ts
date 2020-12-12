import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidServiceService {



constructor( private http:HttpClient) { }

getCountries():Observable<any>{
  const url="https://api.covid19api.com/countries";
  return this.http.get<any>(url);
}

getCountryWiseData(country):Observable<any>{
  const url="https://api.covid19api.com/total/country/"+ country;
  return this.http.get<any>(url);
}

getWorldwideData():Observable<any>{
  const url="https://api.covid19api.com/world/total";
  return this.http.get<any>(url);
}

} 