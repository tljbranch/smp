import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../campaigns.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	
	products = [];

  constructor(private companiesService: CompaniesService) { }

  ngOnInit() {
	  this.companiesService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
    })  
  }

}