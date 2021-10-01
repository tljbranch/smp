import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { CampaignComponent } from './components/campaign/campaign.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { PaymentComponent } from './components/payment/payment.component';
import { CampaignEditComponent } from './components/campaign-edit/campaign-edit.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { CompanyEditComponent } from './components/company-edit/company-edit.component';
import { CompanyComponent } from './components/company/company.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { RedirectionComponent } from './components/redirection/redirection.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UserTypeSelectComponent } from './components/user-type-select/user-type-select.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxStripeModule} from 'ngx-stripe';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutSuccessComponent } from './components/checkout-success/checkout-success.component';
import { CheckoutCancelComponent } from './components/checkout-cancel/checkout-cancel.component';
import { CheckoutCompleteComponent } from './components/checkout-complete/checkout-complete.component';


@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HomeComponent,
    CampaignComponent,
    ProfileComponent,
    DiscoverComponent,
    PaymentComponent,
    CampaignEditComponent,
    ProfileEditComponent,
    CompanyEditComponent,
    CompanyComponent,
    RedirectionComponent,
    UserTypeSelectComponent,
    CheckoutComponent,
    CheckoutSuccessComponent,
    CheckoutCancelComponent,
    CheckoutCompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxBootstrapIconsModule.pick(allIcons),
    ReactiveFormsModule,
    AmplifyUIAngularModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    NgxStripeModule.forRoot('pk_test_51HIVqvIs1V0ZAkpP7Rben7HaMW5WZuZ5dAG8svGu3YbI3yE1AAkoD9VAjYRvVtfVoatUe7c8X01UTBy7CvkifR1F00hAhIPl9G')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
