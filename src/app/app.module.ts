import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CampaignComponent } from './components/campaign/campaign.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { RegisterComponent } from './components/register/register.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { PaymentComponent } from './components/payment/payment.component';
import { CampaignEditComponent } from './components/campaign-edit/campaign-edit.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { CompanyEditComponent } from './components/company-edit/company-edit.component';
import { CompanyComponent } from './components/company/company.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';


@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HomeComponent,
    LoginComponent,
    CampaignComponent,
    ProfileComponent,
    DiscoverComponent,
    RegisterComponent,
    PaymentComponent,
    CampaignEditComponent,
    ProfileEditComponent,
    CompanyEditComponent,
    CompanyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxBootstrapIconsModule.pick(allIcons),
    ReactiveFormsModule,
    AmplifyUIAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
