import { TestBed } from '@angular/core/testing';

import { Rg12Service } from './rg12.service';

describe('Rg12Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Rg12Service = TestBed.get(Rg12Service);
    expect(service).toBeTruthy();
  });
});
