import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from './Produit';
import { AuthentificationService } from './services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private service:AuthentificationService,private router: Router) { }


  logout(){
    //this.authService.logout();
    this.router.navigateByUrl('/home');
   

  }
}
