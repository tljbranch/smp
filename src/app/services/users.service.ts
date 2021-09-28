import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { User, UserModel } from '../interfaces/User';
import { Auth } from 'aws-amplify';
import { from } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private currentUser: User;

  //private REST_API_SERVER = "http://localhost:3000/users";
  private REST_API_SERVER = "http://localhost:5000/Users";

  constructor(private httpClient: HttpClient) {
    this.getCurrentUserPromise.apply(null);
   }

  public getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.REST_API_SERVER);
  }

  public getUser(email: string): Observable<User>{
    const url = `${this.REST_API_SERVER}/${email}`;
    return this.httpClient.get<User>(url);
  }

  public deleteUser(user: User): Observable<User>{
    const url = `${this.REST_API_SERVER}/${user.EMAIL}`;
    return this.httpClient.delete<User>(url);
  }
  public updateUser(user: User): Observable<User>{
    const url = `${this.REST_API_SERVER}/${user.EMAIL}`;
    return this.httpClient.put<User>(url,user,httpOptions);
  }
  public addUser(user: User): Observable<User>{
    return this.httpClient.post<User>(this.REST_API_SERVER,user,httpOptions);
  }


  private getCurrentUserPromise = async () => {
    if (this.currentUser) {
    } else {
      // const user = await Auth.currentAuthenticatedUser();
      //Mock Userpool call
      const mockUserpool = async () => {
        return { "attributes": { "email": "smp.marketing.nus.fb@gmail.com" } }
      };
      const user = await mockUserpool.apply(null);
      //Mock Userpool call
      console.log('mockUserpool return ', user);
      const { attributes } = user;  
      this.currentUser =  new UserModel(attributes.email);
    }
  };

  public getCurrentUser(): Observable<User>{
    const url = `${this.REST_API_SERVER}/${this.currentUser.EMAIL}`;
    return this.httpClient.get<User>(url);
  }

}
