import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { CampaignsService } from '../../services/campaigns.service';
import { Campaign } from '../../interfaces/Campaign';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  projects = [];

  constructor(private campaignsService: CampaignsService,private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.campaignsService.getCampaigns().subscribe(
      (response: any ) => {
        console.log(response);
        this.projects = response.campaigns; // add .data here.
      },
      () => console.log('error')
    );
  }

}