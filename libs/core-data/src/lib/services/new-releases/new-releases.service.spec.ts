import { TestBed } from '@angular/core/testing';

import { NewReleasesService } from './new-releases.service';

describe('NewReleasesService', () => {
  let service: NewReleasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewReleasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
