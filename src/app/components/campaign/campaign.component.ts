import { Component, OnInit } from '@angular/core';



import { CampaignsService } from '../../services/campaigns.service';
import { Campaign } from '../../interfaces/Campaign';



@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  title = 'Creating Campaign';
  campaigns: Campaign[];
  campaign = new Campaign();

  constructor(private campaignService: CampaignsService) { }

  ngOnInit() {
    this.refreshCampaigns();
  }

  refreshCampaigns() {
    this.campaignService.getCampaign()
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