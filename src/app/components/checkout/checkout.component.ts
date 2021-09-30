import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { StripeService } from 'ngx-stripe';
import { User } from '../../interfaces/User';
import Stripe from 'stripe';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent {

  user: User;
  constructor(
    private http: HttpClient,
    private stripeService: StripeService,
    private usersService: UsersService,
  ) {
    this.usersService.getCurrentUser().subscribe(user=>this.user=user);
  }

  checkout(priceId) {
    // Check the server.js tab to see an example implementation
    this.http.post('/create-checkout-session', { priceId })
      .pipe(
        switchMap((session:any) => {
          return this.stripeService.redirectToCheckout({ sessionId: session.id, 
            successUrl: `${window.location.origin}/checkout-success/${session.id}`, 
            cancelUrl: `${window.location.origin}/checkout-cancel`,
            clientReferenceId: this.user.EMAIL,
            customerEmail:this.user.EMAIL});
        })
      )
      .subscribe(result => {
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (result.error) {
          alert(result.error.message);
        }
      });
  }
}