import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  response: any;
  userlog:User;

  constructor( private router: Router,private http: HttpClient) { }
  signIn(userlog){
    const obs = this.http.get('http://localhost:9090/User/login/'+ userlog.email+ '/'+userlog.password);
    obs.subscribe((response) => {
      this.response = response;
      console.log(response);



  });
  return this.response;

   }
   ajouter(userlog){
    const obs = this.http.post('http://localhost:9090/User/add', userlog);
    obs.subscribe((response) => {
      this.response = response;
      console.log(userlog);



  });
   }
}
