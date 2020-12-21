import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgModel, FormsModule, NgForm} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentComponent } from './student/student.component';
import { BankLoginComponent } from './bank-login/bank-login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoanformComponent } from './loanform/loanform.component';
import { BankSchemeComponent } from './bank-scheme/bank-scheme.component';
import { AddSchemeComponent } from './add-scheme/add-scheme.component';
import { BankComponent } from './bank/bank.component';
import { AdminComponent } from './admin/admin.component';
import { AddBankComponent } from './add-bank/add-bank.component';
import { BankListComponent } from './bank-list/bank-list.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { ChengePasswordComponent } from './chenge-password/chenge-password.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddedBanksComponent } from './added-banks/added-banks.component';
import { RemoveBankComponent } from './remove-bank/remove-bank.component';
import { AppStatusComponent } from './app-status/app-status.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentLoginComponent,
    StudentComponent,
    BankLoginComponent,
    SignupComponent,
    HomeComponent,
    LoanformComponent,
    BankSchemeComponent,
    AddSchemeComponent,
    BankComponent,
    AdminComponent,
    AddBankComponent,
    BankListComponent,
    ApplyLoanComponent,
    ChengePasswordComponent,
    StudentListComponent,
    AdminLoginComponent,
    AddedBanksComponent,
    RemoveBankComponent,
    AppStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  
    RouterModule.forRoot([
      
      { path: "", component: HomeComponent},
       {path:"student-login" , component:StudentLoginComponent },
       {path:"student" , component:StudentComponent },
       {path:"bank-login" , component:BankLoginComponent },
       {path:"signup" , component:SignupComponent },
       {path:"home" , component:HomeComponent },
       {path:"loanform" , component:LoanformComponent},
       {path:"add-scheme" , component:AddSchemeComponent },
       {path:"bank-scheme" , component:BankSchemeComponent },
       {path:"bank" , component:BankComponent },
       {path:"admin" , component:AdminComponent },
       {path:"add-bank" , component:AddBankComponent },
       {path:"bank-list" , component:BankListComponent },
       {path:"apply-loan" , component:ApplyLoanComponent },
       {path:"apply-loan" , component:ApplyLoanComponent },
      {path:"chenge-password",component:ChengePasswordComponent},
      {path:"student-list",component:StudentListComponent},
      {path:"admin-list",component:AdminLoginComponent},
      {path:"added-banks",component:AddedBanksComponent},
      {path:"remove-bank",component:RemoveBankComponent},
      {path:"app-status",component:AppStatusComponent}
      
      
      
      
      
      
       
      ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
