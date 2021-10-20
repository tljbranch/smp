import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';

import { CampaignsService } from '../../services/campaigns.service';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { UsersService } from 'src/app/services/users.service';
import { UserModel } from 'src/app/interfaces/User';




@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  projects = [];
  user: UserModel;
  

  constructor(private campaignsService: CampaignsService, private navCtrl: NgxNavigationWithDataComponent,private userService: UsersService,private ref: ChangeDetectorRef,private ngZone: NgZone) { }

  ngOnInit() {
    this.ngZone.run(() => {
    this.campaignsService.getCampaigns().subscribe(
      (response: any ) => {
        console.log(response);
        this.projects = response.campaigns; // add .data here.
      },
      () => console.log('error')
    );

    this.userService.getCurrentUser().subscribe(data => {
      this.user = data
      console.log(data);
      this.ref.detectChanges();
  })
  })}

  navigateToEdit(id: string) {
    this.ngZone.run(() => {
    this.navCtrl.navigate('/campaign-edit', {id:id});
   })}

   navigateToCreate() {
    this.ngZone.run(() => {
    this.navCtrl.navigate('/create-campaign');
   })}

   

}