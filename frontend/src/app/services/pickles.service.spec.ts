import { TestBed } from '@angular/core/testing';

import { PicklesService } from './pickles.service';

describe('PicklesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PicklesService = TestBed.get(PicklesService);
    expect(service).toBeTruthy();
  });
});
