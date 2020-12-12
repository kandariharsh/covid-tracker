import { Component } from '@angular/core';

import {CovidServiceService} from './covid-service.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[DatePipe]
})

export class AppComponent {
title = 'covidApp';

countries:any;
country:any;
Confirmed:Number;
Recovered:Number;
Deaths:Number;
Active:Number;
Country:String;
TotalConfirmed:Number;
TotalDeaths:Number;
TotalRecovered:number;


currentDate: string;

  constructor( private covidApi:CovidServiceService,private datePipe:DatePipe){ }

  ngOnInit(){
    
    this.covidApi.getCountries().subscribe((data)=>{
      console.log(data);
      this.countries=data;
      });
      
    this.getGlobalData()

    let date=new Date;
    this.currentDate=this.datePipe.transform(date,'dd-MMM-yyyy');
    
  }

  
  getDataCountryWise(){
    this.covidApi.getCountryWiseData(this.country).subscribe((data)=>{
      console.log(data);

      var index=data.length-1;
      this.Confirmed=data[index].Confirmed;
      this.Recovered=data[index].Recovered;
      this.Deaths=data[index].Deaths;
      this.Active=data[index].Active;
      this.Country=data[index].Country;
    });
  }
  
  getCountry(country:any){
    this.country = country
  }

  getGlobalData(){
    this.covidApi.getWorldwideData().subscribe((data)=>{
      console.log(data);

      this.TotalConfirmed=data.TotalConfirmed;
      this.TotalDeaths=data.TotalDeaths;
      this.TotalRecovered=data.TotalRecovered;
      
    });
  }
  
}

