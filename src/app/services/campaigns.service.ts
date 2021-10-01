import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Campaign } from '../interfaces/Campaign';


@Injectable({
  providedIn: 'root'
})
export class CampaignsService {
  private currentCampaign: Campaign;

  // baseURL: string = "http://localhost:3000/";
  private REST_API_SERVER = "http://localhost:3000/campaigns";

  constructor(private httpClient: HttpClient) { }


  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public getCampaign(): Observable<Campaign[]> {
    console.log('getCampaign '+this.REST_API_SERVER)
    return this.httpClient.get<Campaign[]>(this.REST_API_SERVER)
  }

  public addCampaign(campaign:Campaign): Observable<Campaign> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(campaign);
    console.log(body)
    return this.httpClient.post(this.REST_API_SERVER, body,{'headers':headers})
  }


}