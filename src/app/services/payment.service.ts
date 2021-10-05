import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Payment, PaymentModel } from '../interfaces/Payment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
    //private REST_API_SERVER = "http://localhost:3000/users";
  private REST_API_SERVER = "http://localhost:5001/Payments";
  constructor(private httpClient: HttpClient) { }
  

  public getPayments(): Observable<Payment[]>{
    return this.httpClient.get<Payment[]>(this.REST_API_SERVER);
  }

  public getPayment(PAYMENTS_ID: string): Observable<Payment>{
    const url = `${this.REST_API_SERVER}/${PAYMENTS_ID}`;
    return this.httpClient.get<Payment>(url);
  }

  public deletePayment(payment: Payment): Observable<Payment>{
    const url = `${this.REST_API_SERVER}/${payment.PAYMENTS_ID}`;
    return this.httpClient.delete<Payment>(url);
  }
  public updatePayment(payment: Payment): Observable<Payment>{
    const url = `${this.REST_API_SERVER}/${payment.PAYMENTS_ID}`;
    return this.httpClient.put<Payment>(url,payment,httpOptions);
  }
  public addPayment(payment: Payment): Observable<Payment>{
    return this.httpClient.post<Payment>(this.REST_API_SERVER,payment,httpOptions);
  }
  public verifyPayment(SESSION_ID: string): Observable<Payment>{
    const url = `${this.REST_API_SERVER}/${SESSION_ID}`;
    return this.httpClient.get<Payment>(url);
  }
}
