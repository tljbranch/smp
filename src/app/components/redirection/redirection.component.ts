import { Attribute, Component, OnInit } from '@angular/core';
import {MatSpinner} from '@angular/material/progress-spinner';
import { UsersService } from 'src/app/users.service';
import { User } from '../../interfaces/User';


@Component({
  selector: 'app-redirection',
  templateUrl: './redirection.component.html',
  styleUrls: ['./redirection.component.css']
})

export class RedirectionComponent implements OnInit {
  
  route: string;

  constructor(private usersService: UsersService) { }
  
  ngOnInit(): void {
    this.usersService.getCurrentUser.subscribe((user) => {
      if (user) {
        switch (user.USER_TYPE) {
          case "Admin":
            this.route = "campaign-edit";
            break;
          case "Company":
            this.route = "company-edit";
            break;
          case "Influencer":
            this.route = "profile-edit";
            break;
          default:
            this.route = "error";
            break;
        }
      } else {
        this.route = "user-type-select";
      }
    });
  }

  evaluate():void{

  }



}
