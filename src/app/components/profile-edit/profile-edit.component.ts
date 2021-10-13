import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserModel } from 'src/app/interfaces/User';
import { UsersService } from 'src/app/services/users.service';
import { countries, languages } from 'countries-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})

export class ProfileEditComponent implements OnInit {

  countries: any;
  languages: any;

  verified: string;
  email: string;
  userType: string;
  contactNumber: number;
  nationality: string;
  blockNumber: string;
  streetName: string;
  unitNumber: string;
  postalCode: number;

  campaignFunds: number = 0;
  companyName: string;

  birthDate: Date;
  category: string;
  tags: string[];
  language: string[];
  profilePhoto: string;
  socialMedia: string[];
  fullName: string;


  user: UserModel;
  influencer: UserModel;
  company: UserModel;
  form: FormGroup;

  alert: string;
  success: string;

  constructor(private userService: UsersService, public fb: FormBuilder, public router: Router) {
    this.countries = countries;
    this.languages = languages;
    this.form = this.fb.group({
      USER_TYPE: [''],
      EMAIL: [''],
      CONTACT_NUMBER: [''],
      NATIONALITY: [''],
      BLOCK_NUMBER: [''],
      STREET_NAME: [''],
      UNIT_NUMBER: [''],
      POSTAL_CODE: [''],
      COMPANY_NAME: [''],
      CAMPAIGN_FUNDS: [''],
      BIRTHDATE: [''],
      CATEGORY: [''],
      TAGS: [''],
      LANGUAGE: [''],
      SOCIAL_MEDIA: [''],
      FULL_NAME: [''],
    });
  }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(data => {
      this.user = data;
      console.log(this.user);
      if (this.user.USER_TYPE === "Influencer"){
        this.birthDate = new Date(this.user.BIRTHDATE);
        this.reloadComponent();
      }
      else {
        this.reloadComponent();
      }
      return this.user;
    },(error => {
      console.log(error);
      this.userService.getNewUserFromUserPool().subscribe((data) => {
        this.email = data.EMAIL;
        this.reloadComponent();
        return this.email;
      });
    }));
  }

  reloadComponent() {
    this.router.navigateByUrl('/profile-edit', { skipLocationChange: true }).then(() => {
      this.router.navigate(['ProfileEditComponent']);
    }); 
  }

  addForm() {
    if (this.form.value.USER_TYPE === "Influencer") {
      this.influencer = this.form.value;
      this.userService.addUser(this.influencer).subscribe(() => {
        this.router.navigate(['/profile']);
      });
    } else if (this.form.value.USER_TYPE === "Company") {
      this.company = this.form.value;
      if (this.form.status === "VALID")
        this.userService.addUser(this.company).subscribe(() => {
          this.router.navigate(['/profile']);
        });
      else {
        this.alert = "Encontered an issue processing the request";
      }
    }
  }

  editForm() {
    if (this.form.value.USER_TYPE === "Influencer") {
      this.influencer = this.form.value;
      this.userService.updateUser(this.influencer).subscribe(() => {
        this.router.navigate(['/profile']);
      });
    } else if (this.form.value.USER_TYPE === "Company") {
      this.company = this.form.value;
      if (this.form.status === "VALID")
        this.userService.updateUser(this.company).subscribe(() => {
          this.router.navigate(['/profile']);
        });
      else {
        this.alert = "Encontered an issue processing the request";
      }
    }
  }
}
