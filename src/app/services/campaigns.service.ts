import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Campaign } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class CampaignsService {

  // baseURL: string = "http://localhost:3000/";
  private REST_API_SERVER = "http://localhost:3000/campaigns";

  constructor(private httpClient: HttpClient) { }


  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }




}