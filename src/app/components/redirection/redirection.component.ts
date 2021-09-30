import { Attribute, Component, OnInit } from '@angular/core';
import {MatSpinner} from '@angular/material/progress-spinner';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/User';
import {Router} from '@angular/router';


@Component({
  selector: 'app-redirection',
  templateUrl: './redirection.component.html',
  styleUrls: ['./redirection.component.css']
})

export class RedirectionComponent implements OnInit {
  
  routeValue: string ="/redirection";

  constructor(
    private usersService: UsersService,
    private route:Router
    ) { }
  
  ngOnInit(): void {
    this.usersService.getCurrentUser().subscribe((user) => {
      if (user) {
        console.log('user email exist: ',user);
        switch (user.USER_TYPE) {
          case "Admin":
            this.routeValue = "/campaign-edit";
            break;
          case "Company":
            this.routeValue = "/company-edit";
            break;
          case "Influencer":
            this.routeValue = "/profile-edit";
            break;
          default:
            console.log('User type not confirmed');
            this.routeValue = "/user-type-select";
            break;
        }
      } else {
        console.log('Not an existing user');
        this.routeValue = "/user-type-select";
      }
      this.route.navigate([this.routeValue]);
    });
  }

  evaluate():void{

  }



}
