import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  bank:any;
  constructor(private router:Router) { }

  ngOnInit() {
    let email= window.sessionStorage.getItem("email");
    console.log("In Bank checking "+email);

  }

  onLogout()
{
  window.sessionStorage.setItem("isActive","0");
  this.router.navigate(["/home"]);
  
}
}
