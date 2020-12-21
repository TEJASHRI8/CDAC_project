import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-app-status',
  templateUrl: './app-status.component.html',
  styleUrls: ['./app-status.component.css']
})
export class AppStatusComponent implements OnInit {
  loanStatus:any;
  loanApplication:any;
  constructor(private router:Router,private service:DataService) { }

  ngOnInit() {
      let email= window.sessionStorage.getItem("email");
    console.log("in inbanklist trying to apply for loan to a particular bank "+email);

    let observableResult = this.service.SelectLoanAppfromStudentByEmail(email);
            observableResult.subscribe((loanAppRecord)=>
            {
              console.log("printing information of loanApplication")
              console.log(loanAppRecord);
              this.loanApplication=loanAppRecord;
              
              console.log(this.loanApplication.applId);
              this.service.selectLoanStatus(this.loanApplication).subscribe(r=>{
                console.log(r)
                this.loanStatus = r;
              })
              // console.log(this.loanApplication.loanStatus.status);
     
            });   

            console.log(this.loanApplication.applId);
    let observable=this.service.selectLoanStatus(this.loanApplication);

    observable.subscribe((result)=>
    {

      console.log(result);
      console.log("-------------------------------------------------------")
      console.log(this.loanApplication.applId);
      this.loanStatus=result;

    });
       
      
  }

  onLogout()
  {
    window.sessionStorage.setItem("isActive","0");
    window.sessionStorage.setItem("email","");
    this.router.navigate(["/home"]);
    
  }


}
