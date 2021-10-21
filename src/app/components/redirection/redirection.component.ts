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
      if (user) {
        if(user===null){
          this.routeValue = "/profile-edit";
          this.route.navigate([this.routeValue]);
        }
        switch (user.USER_TYPE) {
          case null:
            this.routeValue = "/profile-edit";
            this.ngZone.run(() => {
              this.route.navigate([this.routeValue]);
            });           
            break;
          default:
            this.routeValue = "/home";
            this.route.navigate([this.routeValue]);
            break;
        }
      }else{
          this.routeValue = "/profile-edit";
          this.ngZone.run(() => {
            this.route.navigate([this.routeValue]);
          }); 
      }
    }, (error) => {
      this.routeValue = "/profile-edit";
      this.ngZone.run(() => {
        this.route.navigate([this.routeValue]);
      }); 
    });
  }

  evaluate(): void {

  }



}
