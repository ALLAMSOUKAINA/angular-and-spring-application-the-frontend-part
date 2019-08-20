import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user:User;
  constructor(private service:AuthentificationService,private router: Router) { }

  ngOnInit() {
  }
  addUser(user) {
    this.service.ajouter(user);
    this.router.navigateByUrl('/menu');

  }

}
