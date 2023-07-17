import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCommentsComponent } from './users-comments.component';

describe('UsersCommentsComponent', () => {
  let component: UsersCommentsComponent;
  let fixture: ComponentFixture<UsersCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
