import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { CampaignComponent } from './components/campaign/campaign.component';
import { CampaignEditComponent } from './components/campaign-edit/campaign-edit.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RedirectionComponent } from './components/redirection/redirection.component';
import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ViewCampaignComponent } from './components/view-campaign/view-campaign.component';


import {CheckoutSuccessComponent} from './components/checkout-success/checkout-success.component';
import {CheckoutCompleteComponent} from './components/checkout-complete/checkout-complete.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
const routes: Routes = [
  {
    path: 'home',
    component : HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component : ProfileComponent,
    pathMatch: 'full'
  },
  {
    path: 'profile-edit',
    component : ProfileEditComponent,
    pathMatch: 'full'
  },
  {
    path: 'campaign',
    component : CampaignComponent,
    pathMatch: 'full'
  },
  {
    path: 'campaign-edit',
    component : CampaignEditComponent,
    pathMatch: 'full'
  },
  {
    path: 'discover',
    component : DiscoverComponent,
    pathMatch: 'full'
  },
  {
    path: 'payment',
    component : PaymentComponent,
    pathMatch: 'full'
  },
  {
    path: 'redirection',
    component : RedirectionComponent,
    pathMatch: 'full'
  }, 
  {
    path: 'create-campaign',
    component: CreateCampaignComponent,
    pathMatch: 'full'
  },
  {
    path: 'checkout',
    component : CheckoutComponent,
    pathMatch: 'full'
  },
  {
    path: 'checkout-success',
    component : CheckoutSuccessComponent,
    pathMatch: 'full'
  },
  {
    path: 'checkout-complete',
    component : CheckoutCompleteComponent,
    pathMatch: 'full'
  },
  {
    path: 'feedback',
    component : FeedbackComponent,
    pathMatch: 'full'
  },
  {
    path: 'view-campaign',
    component : ViewCampaignComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
