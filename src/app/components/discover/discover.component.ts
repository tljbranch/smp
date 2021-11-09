import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { Campaign } from 'src/app/interfaces/Campaign';
import { CampaignsService } from 'src/app/services/campaigns.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
	campaigns: any[] = [{
    CAMPAIGNS_ID: null,
    CAMPAIGN_NAME: null,
    DESCRIPTIONS: null,
    TAGS: null,
    CATEGORY: null,
    VENUE: null,
    COMPANIES_ID: null,
    START_DATE: null,
    END_DATE: null,
    STATUS: null
  }];
  result: Campaign[] = [];
  query : string = "";
  category: string = "";
  categoryList: string[] = [];

  constructor(private ngZone: NgZone, private ref: ChangeDetectorRef, private campaignsService: CampaignsService, private navCtrl: NgxNavigationWithDataComponent) { }

  ngOnInit(): void { 

    this.campaignsService.getCampaigns().subscribe((data: any) => {
      this.campaigns = data.campaigns;
      this.getCategoryList();
      this.search();
    })

  }

  async getCategoryList() {
    await this.campaigns.forEach((campaign: Campaign) => {
      if((!this.categoryList.includes(campaign.CATEGORY)) && campaign.STATUS === true){
        this.categoryList.push(campaign.CATEGORY);
      }
    })
  }

  async search() {
    console.log(this.category);
    this.result = [];
    await this.campaigns.forEach((campaign: Campaign) => {
      if(campaign.STATUS === true) {
        console.log(campaign.CATEGORY);
        if(this.category !== "" && this.category === campaign.CATEGORY && this.query !== "" && campaign.CAMPAIGN_NAME.toUpperCase().includes(this.query.toUpperCase())) {
          this.result.push(campaign);
        }
        else if(this.category !== "" && this.category === campaign.CATEGORY && this.query === "") {
          this.result.push(campaign);
        }
        else if(this.category === "" && this.query === "") {
          this.result.push(campaign);
        }
      }
    });
    console.log(this.result);
    this.ref.detectChanges();
  }

  viewCampaign(campaign: Campaign){
    this.ngZone.run(() => {
      this.navCtrl.navigate('/view-campaign', {campaign: campaign});
     })
  }

}
