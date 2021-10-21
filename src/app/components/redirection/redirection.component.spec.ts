import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectionComponent } from './redirection.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('RedirectionComponent', () => {
  let component: RedirectionComponent;
  let fixture: ComponentFixture<RedirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule, MatProgressSpinnerModule ],
      declarations: [ RedirectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
