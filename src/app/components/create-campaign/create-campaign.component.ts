import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';

import { CampaignsService } from '../../services/campaigns.service';
import { Campaign } from '../../interfaces/Campaign';
import { Router } from '@angular/router';
import { ClassificationsService } from 'src/app/services/classifications.service';



@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {

  title = 'Create Campaign';
  campaigns: Campaign[];
  campaign = new Campaign();
  classifications: any = { classifications: []};
  tags: any[] = [];
  categories: any[] = [];

  constructor(private campaignService: CampaignsService,public router: Router,private ref: ChangeDetectorRef, private ngZone: NgZone,private classificationsService: ClassificationsService) { }

  ngOnInit() {
    this.ngZone.run(() => {
      this.getClassifications();
      this.refreshCampaigns();
    })
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

  getClassifications() {
    this.ngZone.run(() => {
      this.classificationsService.getCategories().subscribe((data: any) => {
        this.classifications = data;
        this.getCategory();
        this.ref.detectChanges();
      });
    });
  }

  async getCategory() {
    if(this.categories.length > 0){
      this.categories = [];
    }
    await this.classifications.classifications.forEach((element) => {
      if (element.TYPES === 'CATEGORY') {
        this.categories.push(element);
      }
    }); console.log(this.categories);
    this.ref.detectChanges();
}

async getTags() {
    if(this.tags.length > 0){
      if (this.campaign.CATEGORY !== this.tags[0].PARENT) {
        this.campaign.TAGS = [];
      }
      this.tags = [];
    }
    await this.classifications.classifications.forEach((element) => {
      if (element.TYPES === 'TAG' && element.PARENT === this.campaign.CATEGORY) {
        this.tags.push(element);
      }
    });
    this.ref.detectChanges();
}
}