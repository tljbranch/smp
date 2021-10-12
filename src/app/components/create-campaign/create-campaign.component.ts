import { Component, OnInit } from '@angular/core';

import { CampaignsService } from '../../services/campaigns.service';
import { Campaign } from '../../interfaces/Campaign';



@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {

  title = 'Create Campaign';
  campaigns: Campaign[];
  campaign = new Campaign();

  constructor(private campaignService: CampaignsService) { }

  ngOnInit() {
    this.refreshCampaigns();
  }

  refreshCampaigns() {
    this.campaignService.getCampaigns()
      .subscribe(data => {
        console.log(data)
        this.campaigns = data;
      })

  }

  addCampaign() {
    this.campaignService.addCampaign(this.campaign)
      .subscribe(data => {
        console.log(data)
        this.refreshCampaigns();
      })
  }

}