import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UserModel } from '../../interfaces/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	
	user: UserModel;

  constructor(private userService: UsersService) { }

  ngOnInit() {
	  this.userService.getUser("smp.marketing.nus.fb@gmail.com").subscribe((data)=>{
      console.log(data);
      this.user = data;
    })  
  }

}