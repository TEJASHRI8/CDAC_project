import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {

  Bank: any;
  loanApplication:any;
    constructor(private router:Router , private service:DataService) { }

 
  

  ngOnInit() {
    console.log("inside banklist");
    let email= window.sessionStorage.getItem("email");
    console.log("in inbanklist trying to apply for loan to a particular bank "+email);

    let observableResult = this.service.SelectLoanAppfromStudentByEmail(email);
            observableResult.subscribe((loanAppRecord)=>
            {
              console.log("printing information of loanApplication")
              console.log(loanAppRecord);
              this.loanApplication=loanAppRecord;
           
            });   


    let observable=this.service.selectBankList();

    observable.subscribe((result)=>
    {
      console.log(result);
      this.Bank=result;

    });
       
      
  }

  onApply(bid)
  {
    console.log("-----------------printing bank id");
    console.log(bid );
    console.log("-------------------printing loanApplicationId");
    console.log(this.loanApplication)
    let observableUpdateBankId=this.service.UpdateBankIdInLoanApplication(this.loanApplication,bid);
    observableUpdateBankId.subscribe(res=>{
      console.log(res);
      window.location.reload();
    })
  }
  onLogout()
  {
    window.sessionStorage.setItem("isActive","0");
    window.sessionStorage.setItem("email","");
    this.router.navigate(["/home"]);
    
  }
  
}
