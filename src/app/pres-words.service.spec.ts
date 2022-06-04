import { TestBed } from '@angular/core/testing';

import { PresWordsService } from './pres-words.service';

describe('PresWordsService', () => {
  let service: PresWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
