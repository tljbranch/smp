import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Auth } from 'aws-amplify';
import { UsersService } from 'src/app/services/users.service';
import { CampaignsService } from 'src/app/services/campaigns.service';
import { Campaign } from 'src/app/interfaces/Campaign';

@Component({
  selector: 'app-view-campaign',
  templateUrl: './view-campaign.component.html',
  styleUrls: ['./view-campaign.component.css']
})
export class ViewCampaignComponent implements OnInit {
  campaign: any;
  applied: boolean = false;
  email: string = "";

  constructor(public navCtrl: NgxNavigationWithDataComponent, private campaignsService: CampaignsService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.campaign = {
      CAMPAIGNS_ID: '',
      CAMPAIGN_NAME: '',
      DESCRIPTIONS: '',
      TAGS: [],
      CATEGORY: '',
      VENUE: '',
      COMPANIES_ID: '',
      START_DATE: '',
      END_DATE: '',
      STATUS: '',
      APPLIED: ['']
    }
    this.campaign = this.navCtrl.get('campaign');
    this.checkEmail();
    if(this.campaign.CAMPAIGN_NAME === null || this.campaign.CAMPAIGN_NAME === '') {
      this.navCtrl.navigate('/discover');
    }
    Auth.currentAuthenticatedUser().then((user) => {
      this.email = user.attributes.email;
      this.checkEmail();
    })
  }

  checkEmail() {
      if(this.campaign.APPLIED.indexOf(this.email) > -1) {
        this.applied = true;
        this.ref.detectChanges();
      }
    this.ref.detectChanges();
  }

  applyCampaign() {
    this.campaign.APPLIED.push(this.email);
    let campaign = {
      CAMPAIGNS_ID: this.campaign.CAMPAIGNS_ID,
      CAMPAIGN_NAME: this.campaign.CAMPAIGN_NAME,
      DESCRIPTIONS: this.campaign.DESCRIPTIONS,
      TAGS: this.campaign.TAGS,
      CATEGORY: this.campaign.CATEGORY,
      VENUE: this.campaign.VENUE,
      COMPANIES_ID: this.campaign.COMPANIES_ID,
      START_DATE: this.campaign.START_DATE,
      END_DATE: this.campaign.END_DATE,
      STATUS: this.campaign.STATUS,
      APPLIED: this.campaign.APPLIED
    }
    this.campaignsService.updateCampaign(campaign).subscribe(data => {
      this.applied = true;
      console.log(data);
    });
    this.ref.detectChanges();
  }

}
