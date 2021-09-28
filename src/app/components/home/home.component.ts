import { Component, OnInit } from '@angular/core';
import { InfluencersService } from '../../services/influencers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	
	products = [];

  constructor(private influencersService: InfluencersService) { }

  ngOnInit() {
	  this.influencersService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
    })  
  }

}
