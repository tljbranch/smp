import { Attribute, Component, OnInit } from '@angular/core';
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
    private route: Router
  ) { }

  ngOnInit(): void {
    this.usersService.getCurrentUser().subscribe((user) => {
      if (user) {
        console.log('user email exist: ', user);
        switch (user.USER_TYPE) {
          case null:
            console.log('User type not confirmed');
            this.routeValue = "/profile-edit";
            break;
          default:
            console.log('User type found', user.USER_TYPE);
            this.routeValue = "/home";
            break;
        }
      } else {
        console.log('Not an existing user');
        this.routeValue = "/profile-edit";
      }
      this.route.navigate([this.routeValue]);
    }, (error) => {
      console.log('Not an existing user');
      this.routeValue = "/profile-edit";
      this.route.navigate([this.routeValue]);
    });
  }

  evaluate(): void {

  }



}
