import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-added-banks',
  templateUrl: './added-banks.component.html',
  styleUrls: ['./added-banks.component.css']
})
export class AddedBanksComponent implements OnInit {
  Bank: any;
  constructor(private router:Router , private service:DataService) { }

 
  

  ngOnInit() {
        console.log("inside banklist");
        let observable=this.service.selectBankList();

        observable.subscribe((result)=>
        {
          console.log(result);
          this.Bank=result;

        });
  }


  // removeBank(bank.bankId)
  // {

  // }
  onLogout()
  {
    window.sessionStorage.setItem("isActive","0");
    this.router.navigate(["/home"]);
    
  }
 

}
