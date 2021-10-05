import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { User, UserModel } from '../interfaces/User';
import { Auth } from 'aws-amplify';
import { from } from 'rxjs';
import { switchMap,catchError } from 'rxjs/operators';
import { Influencer, InfluencerModel } from '../interfaces/Influencer';
import { Company, CompanyModel } from '../interfaces/Company';
import { InfluencersService } from './influencers.service';
import { CompaniesService } from './companies.service';

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

  constructor(
    private influencersService: InfluencersService,
    private companiesService: CompaniesService) {
  }

  // public getUsers(): Observable<User[]> {
  //   return this.httpClient.get<User[]>(this.REST_API_SERVER);
  // }

  public getUser(email: string): Observable<UserModel> {
    // const url = `${this.REST_API_SERVER}/${email}`;
    // return this.httpClient.get<User>(url);
    return this.influencersService.getInfluencer(email).pipe(
        switchMap((influencer:Influencer)=>{
          return of(this.convertToUserModel(influencer)); 
        }),
        catchError(() => this.companiesService.getCompany(email))
    );
    // return this.influencersService.getInfluencer(email).pipe(
    //   switchMap( (influencer:any)=>{
    //     if(influencer){
    //       return of(this.convertToUserModel(influencer));
    //     }else{
    //       console.log("getCompany");
    //       return this.companiesService.getCompany(email);
    //     }
    //   }),
    //   switchMap((input:any)=>{
    //     if(input===null){
    //       console.log("input===null");
    //       return of(null);
    //     }
    //     else if(input instanceof UserModel){
    //       console.log("input instanceof UserModel");
    //       return of(input);
    //     }else{
    //       return of(this.convertToUserModel(input));
    //     }
    //   })
    // );
  }

  public deleteUser(user: UserModel): Observable<UserModel> {
    // const url = `${this.REST_API_SERVER}/${user.EMAIL}`;
    // return this.httpClient.delete<User>(url);
    if(user.USER_TYPE === 'Influencer'){
      return this.influencersService.deleteInfluencer(user).pipe(switchMap((input:any)=>{
        return of(this.convertToUserModel(input));
      }));
    }else if(user.USER_TYPE === 'Company'){
      return this.companiesService.deleteCompany(user).pipe(switchMap((input:any)=>{
        return of(this.convertToUserModel(input));
      }));
    }else{
      return of(null);
    }
  }
  public updateUser(user: UserModel): Observable<UserModel> {
    // const url = `${this.REST_API_SERVER}/${user.EMAIL}`;
    // return this.httpClient.put<User>(url, user, httpOptions);
    if(user.USER_TYPE === 'Influencer'){
      return this.influencersService.updateInfluencer(user).pipe(switchMap((input:any)=>{
        return of(this.convertToUserModel(input));
      }));
    }else if(user.USER_TYPE === 'Company'){
      return this.companiesService.updateCompany(user).pipe(switchMap((input:any)=>{
        return of(this.convertToUserModel(input));
      }));
    }else{
      return of(null);
    }
  }
  public addUser(user: UserModel): Observable<UserModel> {
    if(user.USER_TYPE === 'Influencer'){
      return this.influencersService.addInfluencer(user).pipe(switchMap((input:any)=>{
        return of(this.convertToUserModel(input));
      }));
    }else if(user.USER_TYPE === 'Company'){
      return this.companiesService.addCompany(user).pipe(switchMap((input:any)=>{
        return of(this.convertToUserModel(input));
      }));
    }else{
      return of(null);
    }
  }


  private getCurrentUserPromise = async () => {
    if (this.currentUser) {
      return this.currentUser;
    } else {
      // const user = await Auth.currentAuthenticatedUser();
      //Mock Userpool call
      const mockUserpool = async () => {
        // return { "attributes": { "email": "smp.marketing.nus.fb@gmail.com" } } //Influencer
        return { "attributes": { "email": "smp.marketing.nus@gmail.com" } } //Company

      };
      const user = await mockUserpool.apply(null);
      //Mock Userpool call
      console.log('mockUserpool return ', user);
      const { attributes } = user;
      this.currentUser = new UserModel(attributes.email);
      return this.currentUser;
    }
  };
  public getCurrentUser(): Observable<User> {
    return from(this.getCurrentUserPromise.apply(null)).pipe(
      switchMap((user: User) => {
        return this.getUser(user.EMAIL);
      })
    )
  };
  
  public convertToUserModel(input:any): UserModel{
   let user = new UserModel("");
    if(input.USER_TYPE ==="Influencer"){
      user = {...input};
    }else if(input.USER_TYPE ==="Company"){
      user = {...input};
    }
    return user;
  }

}
