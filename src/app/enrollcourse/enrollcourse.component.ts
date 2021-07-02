import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubmissionService } from '../submission.service';

@Component({
  selector: 'app-enrollcourse',
  templateUrl: './enrollcourse.component.html',
  styleUrls: ['./enrollcourse.component.css']
})
export class EnrollcourseComponent implements OnInit {

  other_Status: boolean = false;
  courseHeading:any;
  constructor(private fb: FormBuilder,
    private submitService:SubmissionService,
    private route:ActivatedRoute,
    private router:Router) {
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(param=>{
      this.courseHeading=param.name
    })
    if(this.courseHeading==null)
      this.courseHeading="No Heading"

  }
  courseForm = this.fb.group({
    fname: ['',[Validators.required,Validators.maxLength(30),Validators.pattern('[a-zA-Z ]*')]],
    lname: ['',[Validators.required,Validators.maxLength(30),Validators.pattern('[a-zA-Z ]*')]],
    email: ['',[Validators.required,Validators.email]],
    mobile: ['',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('[0-9]*')]],
    gender: ['',Validators.required],
    occupation: ['Student',Validators.required],
    other:['Other',[Validators.required,Validators.maxLength(50)]]
  })

  changeStatus(option: any) {
    if (option.value == "Others"){
      this.other_Status = true;
      this.courseForm.controls.other.patchValue('');
    }
    else{
      this.courseForm.controls.other.setValue('Other');
      this.other_Status=false;
    }
  }
  
  onSubmission(){
    let user=this.courseForm.value;
    this.submitService.doPostMethod(JSON.stringify(user))
    .subscribe(res=>alert("Subscription of "+user.fname+" "+user.lname+" for the course " + this.courseHeading + " was successful! Your ID is "+res.id),
    err=>alert("Form submission failed! Please try again"))
  }

  signOut(){
    localStorage.setItem('access','denied');
    this.router.navigate(['']);
  }
}
