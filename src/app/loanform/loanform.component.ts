import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loanform',
  templateUrl: './loanform.component.html',
  styleUrls: ['./loanform.component.css']
})
export class LoanformComponent implements OnInit {

 
 
  // student=  {"fname": "","mname": "","lname": "","email": "","mobile": "","birthdate":"","maritalStatus":"","adharCard":"",
  //         "fatherName":"", "occupation":"","income":"","instituteName":"","courseName":"",
  //         "startDate":"",    "endDate":"", "ecity":"",   "country":"", "courseFees":"", "totalExpenses":"",
  //         "loanRequired":"", "installments":"", "addressLine":"",  "city":"",   "district":"", "pinCode":"",
  //         "yearOfPassing":"",   "obtainedMarks":"",   "totalMarks":"",    "degreeName":""     
  //     }

  student:any;


  constructor(private route: ActivatedRoute, 
              private service: DataService,
              private router: Router) 
   {
    console.log("Edit Component Created for updating student loan form...");
   }

  ngOnInit() 
  {
   
     let email= window.sessionStorage.getItem("email");
     console.log("in loanform checking "+email);

     let observableResult = 
             this.service.SelectByEmail(email);

      observableResult.subscribe((recordsFound)=>{
        console.log(recordsFound);
        this.student =  recordsFound;
      
      
   }); 
  }
   SubmitLoanForm(loanForm)
   {
 
    console.log("--------------------------------------");
    console.log(this.student);
    console.log("--------------------------------------");
    console.log(loanForm);
    
    let observableResultOfInsert = 
       this.service.InsertForLoanForm(this.student);

    observableResultOfInsert.subscribe((resultOfUpdate)=>{

      console.log(resultOfUpdate);
      //Check if no error

      this.router.navigate(['/student']);
    });
   }
 

onLogout()
{
  window.sessionStorage.setItem("isActive","0");
  this.router.navigate(["/home"]);
  window.sessionStorage.setItem("email","");
}
}
