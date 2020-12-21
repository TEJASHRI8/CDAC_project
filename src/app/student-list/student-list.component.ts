import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
studentlist:any;
Bankdetails:any;
  // studentlist={sid:"",fname:"",lname:"",email:"",mobile:"","degreeName":"","yearOfPassing":"",
  // "city":"","instituteName":"","courseName":"","startDate":"","endDate":"","ecity":"","courseFees":"","loanRequired":""};
   

  constructor(private service:DataService,private router:Router) {

    //console.log("inside list");
    
   }
 
  ngOnInit() {
    console.log("inside student list component by logging into Bank list");
    let email= window.sessionStorage.getItem("email");
    console.log("Bank email is "+email);
    let observableResult=this.service.selectBankByEmail(email);
   observableResult.subscribe((resultofrecord)=>
   {
     console.log(resultofrecord);
     this.Bankdetails=resultofrecord;
   });
    console.log("inside list");

   let observable=this.service.SelectApplicant();
   observable.subscribe((result)=>{
    console.log(result);
    this.studentlist=result;
    // console.log(this.studentlist);
 
   });


  }
 onSubmit(id)
 {
   console.log(id);
   
   let observable=this.service.approveLoan(id);
   observable.subscribe((res)=>{
     console.log(res);
     
   })
 }

 onReject(id)
 {
   console.log("in reject button "+id);
   let observable=this.service.rejectLoan(id);
   observable.subscribe(res=>{
     console.log(res);
   })
 }

onLogout()
{
  window.sessionStorage.setItem("isActive","0");
  window.sessionStorage.setItem("email","");
  this.router.navigate(["/home"]);
  
}
}
