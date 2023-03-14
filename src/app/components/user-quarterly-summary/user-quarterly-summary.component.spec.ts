import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuarterlySummaryComponent } from './user-quarterly-summary.component';

describe('UserQuarterlySummaryComponent', () => {
  let component: UserQuarterlySummaryComponent;
  let fixture: ComponentFixture<UserQuarterlySummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserQuarterlySummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuarterlySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
