import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListviewComponent } from './form-listview.component';

describe('FormListviewComponent', () => {
  let component: FormListviewComponent;
  let fixture: ComponentFixture<FormListviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormListviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
