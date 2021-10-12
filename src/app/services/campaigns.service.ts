import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Campaign } from '../interfaces/Campaign';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class CampaignsService {
  private currentCampaign: Campaign;

  // baseURL: string = "http://localhost:3000/";
  // private REST_API_SERVER = "http://localhost:3000/campaigns";
  private REST_API_SERVER = "https://u5ox4cblbj.execute-api.ap-southeast-1.amazonaws.com/prod";

  constructor(private httpClient: HttpClient) { }


  // public sendGetRequest(){
  //   return this.httpClient.get(this.REST_API_SERVER);
  // }

  // public getCampaign(): Observable<Campaign[]> {
  //   console.log('getCampaign '+this.REST_API_SERVER)
  //   return this.httpClient.get<Campaign[]>(this.REST_API_SERVER)
  // }

  // public addCampaign(campaign:Campaign): Observable<Campaign> {
  //   const headers = { 'content-type': 'application/json'}  
  //   const body=JSON.stringify(campaign);
  //   console.log(body)
  //   return this.httpClient.post(this.REST_API_SERVER, body,{'headers':headers})
  // }

  public getCampaigns(): Observable<Campaign[]> {
    const url = `${this.REST_API_SERVER}/campaigns`;
    return this.httpClient.get<Campaign[]>(this.REST_API_SERVER);
  }
  public getCampaign(CAMPAIGNS_ID: string): Observable<Campaign> {
    const url = `${this.REST_API_SERVER}/campagin?CAMPAIGNS_ID=${CAMPAIGNS_ID}`;
    return this.httpClient.get<Campaign>(url,httpOptions);
  }

  public deleteCampaign(campagin: Campaign): Observable<Campaign> {
    const url = `${this.REST_API_SERVER}/campagin?EMAIL=${campagin.CAMPAIGNS_ID}`;
    return this.httpClient.delete<Campaign>(url,httpOptions);
  }
  public updateCampaign(campagin: Campaign): Observable<Campaign> {
    const url = `${this.REST_API_SERVER}/campagin`;
    return this.httpClient.put<Campaign>(url, campagin, httpOptions);
  }
  public addCampaign(campagin: Campaign): Observable<Campaign> {
    const url = `${this.REST_API_SERVER}/campagin`;
    return this.httpClient.post<Campaign>(url, campagin, httpOptions);
  }

}