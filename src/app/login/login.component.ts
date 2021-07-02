import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private route:Router) { }
  
  ngOnInit(): void {
  }

  nglog=this.fb.group({
    username:[''],
    password:['']
  })

  loginCheck(){
    let uname=this.nglog.controls.username.value;
    let pass=this.nglog.controls.password.value;
    if(uname=="student07" && pass=="user@2021")
    {
      localStorage.setItem('access','granted');
      this.route.navigate(['dashboard']);
    }
    else
      alert("Please enter correct credentials");
  }
  skipLogin(){
    localStorage.setItem('access','denied');
    this.route.navigate(['dashboard']);
  }

}
