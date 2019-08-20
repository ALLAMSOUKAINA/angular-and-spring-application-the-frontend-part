import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { User } from '../User';
import { Router } from '@angular/router';
import { p } from '@angular/core/src/render3';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User;
u;
uu:User;
logindisplay=true;
register=true;
auth=false;
  constructor(private serviceAuth:AuthentificationService,private router: Router) { }

  ngOnInit() {
  }
  onSignIn(user) {
   this.uu= this.serviceAuth.signIn(user);
   this.u=this.uu.active;
     if(this.u=="active"){
      this.router.navigateByUrl('/menu');
     }
    
    //this.service.signIn(user);
   // this.router.navigateByUrl('/acceuil');
  /* if(user.email=='aaaa' && user.password=='1234' )
   {
    console.log("good");
    this.router.navigateByUrl('/menu');

    this.logindisplay=false;
    this.auth=true;

    }*/
    

  }
 

}
