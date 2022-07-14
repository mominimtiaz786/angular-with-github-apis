import { TestBed } from '@angular/core/testing';

import { GithubApisService } from './github-apis.service';

describe('GithubApisService', () => {
  let service: GithubApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
