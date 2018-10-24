import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserserviceService} from '../../app/services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  name:String;
  password:String;
  visible=true;
  posts : Post[];
  
  role:String[]
  constructor(private userserviceService : UserserviceService) { 
    
  }

  ngOnInit() {
    
   this.userserviceService.getAllUserDetails().subscribe((posts)=>{
     this.posts=posts;
   })
  }
   
  
  onClick(){
    console.log('click called...');
    alert('call by form')
  }

}

interface Post{
  id : number,
  name : String,
  salary : number,
  address : String,
  body:String,
  userId:String
}