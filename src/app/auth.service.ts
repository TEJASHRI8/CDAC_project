import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService //implements CanActivate
{
 
  constructor(private router:Router,private service:DataService) { }
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  // {
  //  if(this.Isloggedin())
  //  {
  //    console.log("User Has Logged in");
  //    return true;
  //  }
  //  else
  //  {
  //   console.log("User Has not Logged in");
    
  //    return false;  
  //  }
  // }

user:any;
message:any;

Isloggedin()
{
if(window.sessionStorage.getItem("isActive")!=null &&  window.sessionStorage.getItem("isActive")=="1")
{return true;}
else if(window.sessionStorage.getItem("isActive")!=null &&  window.sessionStorage.getItem("isActive")=="2")
{return true;}
else if(window.sessionStorage.getItem("isActive")!=null &&  window.sessionStorage.getItem("isActive")=="3")
{return true;}
else{
return false;
}
}

isadmin()
{
  if(window.sessionStorage.getItem("isActive")!=null 
  && 
 window.sessionStorage.getItem("isActive")=="1")
{
// some logic to check if person has logged in
return true;
}
else{
return false;
}


}


isbank()
{
  if(window.sessionStorage.getItem("isActive")!=null 
  && 
 window.sessionStorage.getItem("isActive")=="2")
{
// some logic to check if person has logged in
return true;
}
else{
return false;
}

}

isstudent()
{
  if(window.sessionStorage.getItem("isActive")!=null 
  && 
 window.sessionStorage.getItem("isActive")=="3")
{
// some logic to check if person has logged in
return true;
}
else{
return false;
}

}
LogIn(logincredentials) {
  console.log(logincredentials);
  let observableresult=this.service.selectForLogin(logincredentials);
  console.log("in auth");
  observableresult.subscribe((result)=>{
    console.log(result);
    this.user=result;
    console.log(this.user);
    console.log(this.user.password);
    console.log(logincredentials.password);
    if(this.user.password==logincredentials.password)
    {
      console.log("equal");
      window.sessionStorage.setItem("isActive","3");
      window.sessionStorage.setItem("email",this.user.email);
  
      this.router.navigate(["/student"]);
    }
   
    else{
      this.message="username/password is invalid";
    }
  });
}

BankLogIn(logincredentials) {
  console.log(logincredentials);
  let observableresult=this.service.selectForLoginBank(logincredentials);
  console.log("in auth");
  observableresult.subscribe((result)=>{
    console.log(result);
    this.user=result;
    console.log(this.user.password);
    console.log(logincredentials.password);
    if(this.user.password==logincredentials.password && this.user.role=="BANK")
    {
      console.log("equal");
      window.sessionStorage.setItem("isActive","2");
      window.sessionStorage.setItem("email",this.user.email);
  
      this.router.navigate(["/bank"]);
    }
    else if(this.user.password==logincredentials.password && this.user.role=="ADMIN")
    {
      window.sessionStorage.setItem("isActive","1");
      window.sessionStorage.setItem("email",this.user.email);
  
      this.router.navigate(["/admin"]);
    }
    else{
      this.message="username/password is invalid";
    }
  });
}

Logout()
{
  window.sessionStorage.setItem("isActive","0");
  window.sessionStorage.setItem("email","");

}
}
