import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(public http :Http) { 
    console.log('data service is connected');
  }

  getAllUserDetails(){
    return this.http.get('http://localhost:9090/getAllEmployeeDetails').map((response: any) => response.json());
  }

}
