import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseAutomationComponent } from './case-automation.component';

describe('CaseAutomationComponent', () => {
  let component: CaseAutomationComponent;
  let fixture: ComponentFixture<CaseAutomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseAutomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
