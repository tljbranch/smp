import { Component, OnInit } from '@angular/core';
import { InfluencersService } from '../../services/influencers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	
	products = [];

  page = {
    title: 'Welcome Back ',
    subtitle: 'Your one stop marketing portal.',
    content: 'Region: ',
    image: 'https://miro.medium.com/max/2000/0*72mDyfTcxtjgErD6.jpg'
  }


  constructor(private influencersService: InfluencersService) { }

  ngOnInit() {
	  this.influencersService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
    })  
  }

}
