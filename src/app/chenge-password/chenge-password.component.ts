import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chenge-password',
  templateUrl: './chenge-password.component.html',
  styleUrls: ['./chenge-password.component.css']
})
export class ChengePasswordComponent implements OnInit {

  student={
    "email":'',
    "password":''
  };
  message;
  

  constructor(private route: ActivatedRoute, 
              private service: DataService,
              private router: Router) 
   {
    console.log("Edit Component Created for updating student loan form...");
   }

  ngOnInit() 
  {
   
     this.student.email= window.sessionStorage.getItem("email");
     console.log("in changing student password "+this.student.email);

     let observableResult = 
             this.service.SelectByEmail(this.student.email);

      observableResult.subscribe((recordsFound)=>{
        console.log(recordsFound);
        console.log(recordsFound);
    
       // this.student =  recordsFound[0];      
   }); 
  }

  OnUpdateCallMe(entireFormContent)
  {
    console.log("--------------------------------------");
    console.log(this.student);
    console.log("--------------------------------------");
    console.log(entireFormContent);
    
    let observableResultOfUpdate = 
       this.service.Update(this.student);

    observableResultOfUpdate.subscribe((resultOfUpdate)=>{

      console.log("result of update"+resultOfUpdate);
      //Check if no error
      
      this.router.navigate(['/student']);
    });
  }


onLogout()
{
  window.sessionStorage.setItem("isActive","0");
  this.router.navigate(["/home"]);
  
}
}
