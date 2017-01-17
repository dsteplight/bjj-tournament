/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OneTournamentService } from './one-tournament.service';

describe('OneTournamentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OneTournamentService]
    });
  });

  it('should ...', inject([OneTournamentService], (service: OneTournamentService) => {
    expect(service).toBeTruthy();
  }));
});
