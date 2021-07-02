import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  constructor(private http:HttpClient) { }

  doPostMethod(userdata:any):Observable<any>{
    return this.http.post('https://jsonplaceholder.typicode.com/posts',userdata);
  }
}
