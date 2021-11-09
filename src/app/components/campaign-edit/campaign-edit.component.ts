import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { Campaign } from 'src/app/interfaces/Campaign';
import { CampaignsService } from 'src/app/services/campaigns.service';
import { ClassificationsService } from 'src/app/services/classifications.service';

@Component({
  selector: 'app-campaign-edit',
  templateUrl: './campaign-edit.component.html',
  styleUrls: ['./campaign-edit.component.css']
})
export class CampaignEditComponent implements OnInit {

  classifications: any = { classifications: [] };
  tags: any[] = [];
  categories: any[] = [];
  campaigns: Campaign[];
  campaign = new Campaign();


  constructor(public navCtrl: NgxNavigationWithDataComponent, private ngZone: NgZone, private classificationsService: ClassificationsService,
    private campaignService: CampaignsService, public router: Router, private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.refreshCampaigns();
    this.getCategory();
  }

  refreshCampaigns() {
    this.campaignService.getCampaign(this.navCtrl.get('id'))
      .subscribe(data => {
        this.campaign = data;
      })

  }

  updateCampaign() {
    this.campaignService.updateCampaign(this.campaign)
      .subscribe(data => {
        this.refreshCampaigns();
        this.router.navigate(['/campaign']);
      })
  }

  navigateToCampaignDel() {
    this.ngZone.run(() => {
      this.campaign.STATUS = false;
      this.updateCampaign();
    })
  }


  async getCategory() {
    if (this.categories.length > 0) {
      this.categories = [];
    }
    await this.classifications.classifications.forEach((element) => {
      if (element.TYPES === 'CATEGORY') {
        this.categories.push(element);
      }
    });
    this.ref.detectChanges();
  }

  async getTags() {
    if (this.tags.length > 0) {
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
