import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: DataService, 
    private router: Router) { }

message = "";
ngOnInit() {
}

SignUp(entireData)
{
let studObj=entireData.form.value;
console.log("studObj"+studObj);
let observableResult=this.service.Insert(studObj);
observableResult.subscribe((result)=>
{
  console.log(result);
  this.router.navigate(['/home']);
});

}

GoBackHome()
{
this.router.navigate(['/home']);
}



onLogout()
{
  window.sessionStorage.setItem("isActive","0");
  this.router.navigate(["/home"]);
  
}
}
