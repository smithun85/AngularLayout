import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateLogicsComponent } from './date-logics.component';

describe('DateLogicsComponent', () => {
  let component: DateLogicsComponent;
  let fixture: ComponentFixture<DateLogicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateLogicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateLogicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
