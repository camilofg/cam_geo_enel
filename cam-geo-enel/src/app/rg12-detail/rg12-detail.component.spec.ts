import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rg12DetailComponent } from './rg12-detail.component';

describe('Rg12DetailComponent', () => {
  let component: Rg12DetailComponent;
  let fixture: ComponentFixture<Rg12DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rg12DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rg12DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
