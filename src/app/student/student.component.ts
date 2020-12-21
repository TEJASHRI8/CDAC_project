import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router:Router,private service:DataService) { }
 

  ngOnInit() {
  }


onLogout()
{
  window.sessionStorage.setItem("isActive","0");
  // window.sessionStorage.setItem("email","");
  this.router.navigate(["/home"]);
  
}

}
