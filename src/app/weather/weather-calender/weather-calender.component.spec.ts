import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCalenderComponent } from './weather-calender.component';

describe('WeatherCalenderComponent', () => {
  let component: WeatherCalenderComponent;
  let fixture: ComponentFixture<WeatherCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherCalenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
