import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Company } from '../interfaces/Company';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  //private REST_API_SERVER = "http://localhost:3000/users";
  //private REST_API_SERVER = "http://localhost:5000/Companies";
  private REST_API_SERVER = "https://xf6hknrx2b.execute-api.ap-southeast-1.amazonaws.com/prod";
  
  constructor(private httpClient: HttpClient) {
  }

  public getCompanies(): Observable<Company[]> {
    const url = `${this.REST_API_SERVER}/companies`;
    return this.httpClient.get<Company[]>(this.REST_API_SERVER);
  }

  public getCompany(email: string): Observable<Company> {
    const url = `${this.REST_API_SERVER}/company?EMAIL=${email}`;
    return this.httpClient.get<Company>(url,httpOptions);
  }

  public deleteCompany(company: Company): Observable<Company> {
    const url = `${this.REST_API_SERVER}/company?EMAIL=${company.EMAIL}`;
    return this.httpClient.delete<Company>(url,httpOptions);
  }
  public updateCompany(company: Company): Observable<Company> {
    const url = `${this.REST_API_SERVER}/company`;
    return this.httpClient.put<Company>(url, company, httpOptions);
  }
  public addCompany(company: Company): Observable<Company> {
    const url = `${this.REST_API_SERVER}/company`;
    return this.httpClient.post<Company>(url, company, httpOptions);
  }   
  
}