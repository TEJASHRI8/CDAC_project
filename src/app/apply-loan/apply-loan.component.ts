import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onLogout()
{
  window.sessionStorage.setItem("isActive","0");
  this.router.navigate(["/home"]);
  
}
}
