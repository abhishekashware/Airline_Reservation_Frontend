import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'
import {Signupservice} from '../../services/signup.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public signup: Signupservice, private router: Router) {​​​​​​​​ }​​​​​​​​
  faEyeSlash = faEyeSlash;
  faEye=faEye;
  //password toggle
  visible = false;
  //Error Messages
  public response:string ;
  public timer : boolean
  ngOnInit(): void {
  }
  onClick()
  {
    this.visible = !this.visible;
  }
  onSubmit(formvalue)
  {
    delete formvalue.cnfpwd;
    this.timer = true
    Swal.fire('Creating your account');    Swal.showLoading();
    this.signup.post(formvalue).subscribe(d=>{
      if(d=="Registration Successfull")
      {
        Swal.fire('Done', 'Account Created!', 'success')
        this.router.navigate([`${'login'}`]);
        
      }else{
        this.response=d;
      }
    });
    Swal.close()

    // if(response == null)
  
    // else 
    // {
    //   if(response == "500" )
    //       {
    //         Swal.fire('Internal Server Error', 'Try again later' , 'error')
    //       }
    //       else
    //         this.response = response
    // }
    setTimeout(() => {
      this.timer = false
    },3000)
  }

}
