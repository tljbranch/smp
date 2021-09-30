import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { CampaignComponent } from './components/campaign/campaign.component';
import { CampaignEditComponent } from './components/campaign-edit/campaign-edit.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanyEditComponent } from './components/company-edit/company-edit.component';
import { RedirectionComponent } from './components/redirection/redirection.component';
import {UserTypeSelectComponent} from './components/user-type-select/user-type-select.component';
import {CheckoutSuccessComponent} from './components/checkout-success/checkout-success.component';


const routes: Routes = [
  {
    path: 'home',
    component : HomeComponent
  },
  {
    path: 'profile',
    component : ProfileComponent
  },
  {
    path: 'profile-edit',
    component : ProfileEditComponent
  },
  {
    path: 'company',
    component : CompanyComponent
  },
  {
    path: 'company-edit',
    component : CompanyEditComponent
  },
  {
    path: 'campaign',
    component : CampaignComponent
  },
  {
    path: 'campaign-edit',
    component : CampaignEditComponent
  },
  {
    path: 'discover',
    component : DiscoverComponent
  },
  {
    path: 'payment',
    component : PaymentComponent
  },
  {
    path: 'redirection',
    component : RedirectionComponent
  },
  {
    path: 'user-type-select',
    component : UserTypeSelectComponent
  },
  {
    path: 'checkout-success/:sesssionId',
    component : CheckoutSuccessComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
