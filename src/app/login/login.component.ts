import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:String;
  visible=true;
  data :{
       id : number,
       name :String,
       salary: number

  }
  role:String[]
  constructor() { }

  ngOnInit() {
    this.name="amit kumar choudhary";
    this.data={
      id :11,name:"akc",salary:20000
    }

    this.role=['hero','zero','tero'];
  }
  onClick(){
    console.log('click called...');
    this.name='a k  choudhary';
  }
  addHobby(role){
   this.role.unshift(role);
   return false;
  }

}
