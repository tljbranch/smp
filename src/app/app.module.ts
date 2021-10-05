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

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';

import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component'
import { MatInputModule } from '@angular/material/input';

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
    CreateCampaignComponent,
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
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
