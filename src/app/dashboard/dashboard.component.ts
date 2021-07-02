import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchText:string="";

  logStat:boolean=false;
  constructor(private route:Router) { }
  ngOnInit(): void {
  }

  applying(courseName:any){
    this.route.navigate(['enrollcourse'],{
      queryParams:{name:courseName}
    });
  }

  courses_list=[
    {
      id:1,
      name:"IT Engineering"
    },
    {
      id:2,
      name:"Computer Science And Engineering"
    },
    {
      id:3,
      name:"Mechanical Engineering"
    },
    {
      id:4,
      name:"Electrical Engineering"
    },
    {
      id:5,
      name:"Business Process Management"
    },
    {
      id:6,
      name:"Accounting Management"
    },
    {
      id:7,
      name:"Administrative Management"
    },
    {
      id:8,
      name:"Associate Management"
    },
    {
      id:9,
      name:"Biotechnology Management"
    },
    {
      id:10,
      name:"Brand Management"
    }
  ]

}
