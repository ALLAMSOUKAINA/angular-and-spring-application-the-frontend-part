import { Component, OnInit } from '@angular/core';
import { ProduitCRUDService } from '../services/produit-crud.service';
import { Produit } from '../Produit';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  showFormular = false;
  produit: Produit;
  constructor(private service: ProduitCRUDService) { }

  ngOnInit() {
  }
  addProduct(produit) {
    this.service.ajouter(produit);
  }

}
