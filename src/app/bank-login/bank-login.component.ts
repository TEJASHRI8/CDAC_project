import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bank-login',
  templateUrl: './bank-login.component.html',
  styleUrls: ['./bank-login.component.css']
})
export class BankLoginComponent implements OnInit {
  message;
  

  constructor(private router:Router,
    private service:AuthService) { }

  ngOnInit() {
  }

  SignIn(loginform)
  {
    console.log("in sign in")
    let logincredentials=loginform.form.value;
    console.log(logincredentials);

    let isuservalid=this.service.BankLogIn(logincredentials);
    
    
  }
  cancel()
  {
    this.router.navigate(['/home']);
  }

  onLogout()
  {
  window.sessionStorage.setItem("isActive","0");
  window.sessionStorage.setItem("email","");
  this.router.navigate(["/home"]);
  
}
  }

