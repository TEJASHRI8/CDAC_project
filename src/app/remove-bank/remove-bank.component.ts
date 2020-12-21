import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-remove-bank',
  templateUrl: './remove-bank.component.html',
  styleUrls: ['./remove-bank.component.css']
})
export class RemoveBankComponent implements OnInit {
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

removeBank(id)
{
  console.log("Student id is "+id);
  let observableStudentId=this.service.deleteBank(id);
  observableStudentId.subscribe((result)=>
  {
    console.log(result);
    this.Bank=result;
     });
     this.router.navigate(["/remove-bank"]);

}



  onLogout()
  {
    window.sessionStorage.setItem("isActive","0");
    this.router.navigate(["/home"]);
    
  }
}
