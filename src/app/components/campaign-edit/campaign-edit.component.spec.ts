import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';

import { CampaignEditComponent } from './campaign-edit.component';

describe('CampaignEditComponent', () => {
  let component: CampaignEditComponent;
  let fixture: ComponentFixture<CampaignEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule, NgSelectModule],
      declarations: [ CampaignEditComponent ],
      providers: [ NgxNavigationWithDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
