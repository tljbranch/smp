import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})

export class ProfileEditComponent implements OnInit {

  filePath: string = 'https://bootdey.com/img/Content/avatar/avatar7.png';
  myForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.myForm = this.fb.group({
      img: [null],
      filename: ['']
    })
  }

  ngOnInit(): void { }

  imagePreview(e) {
    const file = (e.target as HTMLInputElement).files[0];

    this.myForm.patchValue({
      img: file
    });

    this.myForm.get('img').updateValueAndValidity()

    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  submit() {
    console.log(this.myForm.value)
  }

}
