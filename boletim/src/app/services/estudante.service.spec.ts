import { TestBed, inject } from '@angular/core/testing';

import { EstudanteService } from './estudante.service';

describe('EstudanteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstudanteService]
    });
  });

  it('should ...', inject([EstudanteService], (service: EstudanteService) => {
    expect(service).toBeTruthy();
  }));
});
