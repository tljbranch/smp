import { Component, OnInit } from '@angular/core';

import { CampaignsService } from '../../services/campaigns.service';
import { Campaign } from '../../interfaces/Campaign';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {

  title = 'Create Campaign';
  campaigns: Campaign[];
  campaign = new Campaign();

  constructor(private campaignService: CampaignsService,public router: Router) { }

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
    const generateId = Date.now().toString();
    this.campaign.CAMPAIGNS_ID = generateId;
    this.campaignService.addCampaign(this.campaign)
      .subscribe(data => {
        console.log(data)
        this.refreshCampaigns();
        this.router.navigate(['/campaign']);
      })
  }

}