import { Component, NgZone, OnInit } from '@angular/core';
import { Campaign } from 'src/app/interfaces/Campaign';
import { Payment } from 'src/app/interfaces/Payment';
import { PaymentService } from 'src/app/services/payment.service';
import { UsersService } from 'src/app/services/users.service';
import { UserModel } from '../../interfaces/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: UserModel;
  campaign: Payment;

  paymentLoaded: Promise<boolean>

  constructor(private ngZone: NgZone, private userService: UsersService) { }

  ngOnInit() {
    this.ngZone.run(() => {
      this.userService.getCurrentUser().subscribe(data => {
        this.user = data;
      })
    })
  }

}