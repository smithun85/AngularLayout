import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFormDataComponent } from './show-form-data.component';

describe('ShowFormDataComponent', () => {
  let component: ShowFormDataComponent;
  let fixture: ComponentFixture<ShowFormDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFormDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
