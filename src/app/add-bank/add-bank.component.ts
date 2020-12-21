

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent implements OnInit {

  Bank:any;
  constructor(private router:Router,private service:DataService) { }

  ngOnInit() {
  }
addNewBank(addBankForm)
{
  let bankObj=addBankForm.form.value;
  console.log("bankObj"+bankObj);
  let observableResult=this.service.InsertBank(bankObj);
  observableResult.subscribe((result)=>
  {
    console.log(result);
    this.router.navigate(['/admin']);

  });

}

  onLogout()
{
  window.sessionStorage.setItem("isActive","0");
  this.router.navigate(["/home"]);
  
}
}
