import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private helper:HttpClient) { }

  Insert(studObj)
  {
    return  this.helper.post("http://localhost:8080/Loan_mgmnt_19thJan/student/register",studObj);
  }

  InsertBank(bankObj)
  {
    return  this.helper.post("http://localhost:8080/Loan_mgmnt_19thJan/bank/addbank",bankObj);
 
    
  }

  selectLoanStatus(loanApplication)
  {
      return this.helper.get("http://localhost:8080/Loan_mgmnt_19thJan/loanStatusctrller/"+loanApplication.applId);
  }

  validateuser(userobj)
  {
    return this.helper.post("", userobj);
  }

  selectForLogin(logincredential)
  {
    
    return this.helper.post("http://localhost:8080/Loan_mgmnt_19thJan/student/",logincredential);
    console.log("record returned");
  }

  selectForLoginBank(logincredential)
  {
    
    return this.helper.post("http://localhost:8080/Loan_mgmnt_19thJan/bank/",logincredential);
    console.log("record returned");
  }

  InsertForLoanForm(logincredential)
  {
    console.log("in inserting form details"+logincredential);
    return this.helper.post("http://localhost:8080/Loan_mgmnt_19thJan/student/form",logincredential);
    console.log("record returned");

  }
  SelectByEmail(email)
  {
    return this.helper.post("http://localhost:8080/Loan_mgmnt_19thJan/student/email",email);
    console.log("record returned");
    
 }
 Update(studObj)
  {
    console.log(studObj)
   return this.helper.put("http://localhost:8080/Loan_mgmnt_19thJan/student/" + studObj.email ,studObj.password);
  }

  SelectApplicant()
  {
    return this.helper.get("http://localhost:8080/Loan_mgmnt_19thJan/loanApplication/list");

  }
  SelectLoanAppfromStudentByEmail(email)
  {
    return this.helper.post("http://localhost:8080/Loan_mgmnt_19thJan/loanApplication/email/",email);

  }

  selectBankList()
  {
    return this.helper.get("http://localhost:8080/Loan_mgmnt_19thJan/bank/banklist");

  }

  approveLoan(id)
  {
    console.log(id);
    
    return this.helper.post("http://localhost:8080/Loan_mgmnt_19thJan/loanApplication/approve",id);
    
  }

  rejectLoan(id)
  {
    console.log(id);
    
    return this.helper.post("http://localhost:8080/Loan_mgmnt_19thJan/loanApplication/reject",id);
    
  }

  deleteBank(id)
  {
    console.log(id);
    
    return this.helper.delete("http://localhost:8080/Loan_mgmnt_19thJan/bank/",id);
    
  }
  UpdateBankIdInLoanApplication(formData,bank_id)
  {
    console.log("printing id in service "+bank_id);
    console.log("printing formdata in service "+formData.applId);
   
   return this.helper.put("http://localhost:8080/Loan_mgmnt_19thJan/loanApplication/"+bank_id ,formData.applId);
  }
  selectBankByEmail(email)
  {
    return this.helper.get("http://localhost:8080/Loan_mgmnt_19thJan/bank/"+email);

  }


}
