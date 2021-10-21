import { Attribute, Component, OnInit,ChangeDetectorRef, NgZone } from '@angular/core';
import { MatSpinner } from '@angular/material/progress-spinner';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-redirection',
  templateUrl: './redirection.component.html',
  styleUrls: ['./redirection.component.css']
})

export class RedirectionComponent implements OnInit {

  routeValue: string = "/redirection";

  constructor(
    private usersService: UsersService,
    private route: Router,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.usersService.getCurrentUser().subscribe((user) => {
      console.log('Redirection - User init');
      if (user) {
        if(user===null){
          console.log('User is null');
          this.routeValue = "/profile-edit";
          this.route.navigate([this.routeValue]);
        }
        console.log('user email exist: ', user);
        switch (user.USER_TYPE) {
          case null:
            console.log('User type not confirmed');
            this.routeValue = "/profile-edit";
            this.ngZone.run(() => {
              this.route.navigate([this.routeValue]);
            });           
            break;
          default:
            console.log('User type found', user.USER_TYPE);
            this.routeValue = "/home";
            this.route.navigate([this.routeValue]);
            break;
        }
      }else{
        console.log('User Not type found');
          this.routeValue = "/profile-edit";
          this.ngZone.run(() => {
            this.route.navigate([this.routeValue]);
          }); 
      }
    }, (error) => {
      console.log('Error not an existing user');
      this.routeValue = "/profile-edit";
      this.ngZone.run(() => {
        this.route.navigate([this.routeValue]);
      }); 
    });
  }

  evaluate(): void {

  }



}
