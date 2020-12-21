import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-scheme',
  templateUrl: './bank-scheme.component.html',
  styleUrls: ['./bank-scheme.component.css']
})
export class BankSchemeComponent implements OnInit {
  books: any;
  constructor(private router:Router) { }

  listOfSchemes(){
this.books=[
  {'schemeId':5,'schemeName':'Resposible for ur edu','description':'Rubin & Hartman','region':'INDIA','amount':'440000','courseType':'UG'},
];
  }

  ngOnInit() {
  }


 onLogout()
{
  window.sessionStorage.setItem("isActive","0");
  this.router.navigate(["/home"]);
  
}
}
