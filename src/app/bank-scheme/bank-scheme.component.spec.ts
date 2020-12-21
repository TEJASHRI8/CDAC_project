import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankSchemeComponent } from './bank-scheme.component';

describe('BankSchemeComponent', () => {
  let component: BankSchemeComponent;
  let fixture: ComponentFixture<BankSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
