import { TestBed } from '@angular/core/testing';

import { MdtTableLibService } from './mdt-table-lib.service';

describe('MdtTableLibService', () => {
  let service: MdtTableLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdtTableLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
