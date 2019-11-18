import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseconfigComponent } from './caseconfig.component';

describe('CaseconfigComponent', () => {
  let component: CaseconfigComponent;
  let fixture: ComponentFixture<CaseconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
