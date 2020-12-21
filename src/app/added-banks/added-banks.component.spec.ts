import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedBanksComponent } from './added-banks.component';

describe('AddedBanksComponent', () => {
  let component: AddedBanksComponent;
  let fixture: ComponentFixture<AddedBanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedBanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
