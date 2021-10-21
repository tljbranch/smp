import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/interfaces/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: UserModel;

  page = {
    title: 'Welcome Back, ',
    subtitle: 'Your one stop marketing portal.',
    content: 'Region: ',
    image: 'https://miro.medium.com/max/2000/0*72mDyfTcxtjgErD6.jpg'
  }


  constructor(private usersService: UsersService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.usersService.getCurrentUser().subscribe((data) => {
      this.user = data;
      this.ref.detectChanges();
    })
  }

}
