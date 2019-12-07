import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rg12Component } from './rg12.component';

describe('Rg12Component', () => {
  let component: Rg12Component;
  let fixture: ComponentFixture<Rg12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rg12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rg12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
