import { TestBed } from '@angular/core/testing';

import { BusquedaDocService } from './busqueda-doc.service';

describe('BusquedaDocService', () => {
  let service: BusquedaDocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusquedaDocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
