import { Component, OnInit } from '@angular/core';
import { CampaignsService } from '../../services/campaigns.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
	
	products = [];

  constructor(private campaignsService: CampaignsService) { }

  ngOnInit() {
	  this.campaignsService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
    })  
  }

}
