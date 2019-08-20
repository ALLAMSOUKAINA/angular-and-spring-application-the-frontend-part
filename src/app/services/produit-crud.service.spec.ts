import { TestBed, inject } from '@angular/core/testing';

import { ProduitCRUDService } from './produit-crud.service';

describe('ProduitCRUDService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProduitCRUDService]
    });
  });

  it('should be created', inject([ProduitCRUDService], (service: ProduitCRUDService) => {
    expect(service).toBeTruthy();
  }));
});
