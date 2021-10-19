import { Component, NgZone, OnInit } from '@angular/core';
import { Payment } from 'src/app/interfaces/Payment';
import { UsersService } from 'src/app/services/users.service';
import { UserModel } from '../../interfaces/User';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  email: any;
  user: UserModel;
  campaign: Payment;

  paymentLoaded: Promise<boolean>

  constructor(public router: Router, private ngZone: NgZone, private usersService: UsersService) { }

  ngOnInit() {
    this.ngZone.run(() => {
      Auth.currentAuthenticatedUser().then((user) => {
        this.email = user.attributes.email;
        this.usersService.getUser(this.email).subscribe(data => {
          if (data != null) {
            this.user = data;
          } else {
            this.usersService.getNewUserFromUserPool().subscribe(data => {
              this.router.navigate(['/profile-edit']);
            }), (error => {
              this.router.navigate(['/profile-edit']);
            })
          }
        })
      });
    })
  }

}