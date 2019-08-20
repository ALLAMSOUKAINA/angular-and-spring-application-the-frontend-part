import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProduitCRUDService } from '../services/produit-crud.service';
import { Produit } from '../Produit';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {
  produits: Produit;
  show = true;
  idapi;
  search = !this.show;
  idsupp;


  constructor(private http: HttpClient, private service: ProduitCRUDService) {


  }
  ngOnInit() { }


  list() {
    this.search = false;
    this.produits = this.service.showProductList();
    this.show = true;
    console.log(this.produits);
    

  }
  searchID() {
    this.produits = this.service.searchById(this.idapi);

   this.search = true;
   this.show = false;
  console.log(this.idapi);


  }
  supprimer() {

    this.service.delete(this.idapi);
    console.log(this.idapi);
    this.search = !this.search;
    this.idapi = '';

  }


}
