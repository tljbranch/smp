import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view-campaign',
  templateUrl: './view-campaign.component.html',
  styleUrls: ['./view-campaign.component.css']
})
export class ViewCampaignComponent implements OnInit {
  campaign: any = {}

  constructor(public navCtrl: NgxNavigationWithDataComponent) { }

  ngOnInit(): void {
    this.campaign = this.navCtrl.get('campaign');
    if(this.campaign === {}) {
      this.navCtrl.navigate('/discover');
    }
  }

}
