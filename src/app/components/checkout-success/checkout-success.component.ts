import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User, UserModel } from '../../interfaces/User';
import { StripeService } from 'ngx-stripe';
import { HttpClient } from '@angular/common/http';
import { PaymentService } from '../../services/payment.service';
import { Payment, PaymentModel } from '../../interfaces/Payment';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-checkout-success',
  templateUrl: './checkout-success.component.html',
  styleUrls: ['./checkout-success.component.css']
})
export class CheckoutSuccessComponent implements OnInit {
  sessionId: string;
  loading: boolean = true;
  credit: string;
  message: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private stripeService: StripeService,
    private usersService: UsersService,
    private paymentService: PaymentService,
    private http: HttpClient
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.sessionId = params['sessionId'];
        this.processPaymentPromise.apply(null);
      }
    );
  }

  private processPaymentPromise = async () => {
    const stripe = require('stripe')('sk_test_51HIVqvIs1V0ZAkpPxaw60x6KFqWqU4XTl5l3wX8oiamASWZyj0Cwswke0rWb06EKvvsVFroi9c9bRBb3RmwKE4qq00gpmL07T2');
    const session = await stripe.checkout.sessions.retrieve(this.sessionId);
    let newPayment = new PaymentModel();
    newPayment.PAYMENTS_ID = null;
    newPayment.AMOUNT = session.amount_total;
    newPayment.CAMPAIGN_FUNDS_PURCHASED = session.amount_total * 10;
    newPayment.COMPANIES_ID = session.client_reference_id;
    newPayment.PAYMENT_STATUS = session.payment_status;
    newPayment.PAYMENT_TYPE = session.payment_method_types[0];
    newPayment.TRANSACTION_ID = session.id;
    this.paymentService.addPayment(newPayment).pipe(
      switchMap((x: Payment) => {
        if (x.PAYMENT_STATUS === "paid") {
          this.credit = x.CAMPAIGN_FUNDS_PURCHASED.toString();
        } else {
          this.credit = "0";
        }
        return this.usersService.getCurrentUser();
      }),
      switchMap((y: User) => {
        y.CAMPAIGN_FUNDS = (parseInt(y.CAMPAIGN_FUNDS)  + parseInt(this.credit)).toString() ;
        return this.usersService.updateUser(y);
      })
    ).subscribe(
      z => {
        if (this.credit==="0") {
          this.message = "Your Payment did not succeed :(";
        } else {
          this.message = `${this.credit} credits have been added to your account. You have a total of ${z.CAMPAIGN_FUNDS} ready to go!`;
        }
      }
    );
  };
}
