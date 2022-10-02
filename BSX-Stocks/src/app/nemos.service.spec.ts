import { TestBed } from '@angular/core/testing';

import { NemosService } from './nemos.service';

describe('NemosService', () => {
  let service: NemosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NemosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
