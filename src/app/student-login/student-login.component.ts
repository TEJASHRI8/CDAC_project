import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
  
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

    let isuservalid=this.service.LogIn(logincredentials);
    
  }
  
  
}
