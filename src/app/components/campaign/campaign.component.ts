import { Component, OnInit } from '@angular/core';

import { CampaignsService } from '../../services/campaigns.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  products = [];

  constructor(private campaignsService: CampaignsService) { }

  ngOnInit(){
    // this.campaignsService.sendGetRequest().subscribe((data: any[])=>{
    //   console.log(data);
    //   this.products = data;
    // })  
  }

}