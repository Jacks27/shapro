import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  get email(){
    return this.lgform?.get('email')
  }
  get password(){
    return this.lgform?.get('password')
  }
  constructor(private fmb:FormBuilder){}
  lgform=this.fmb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',Validators.required]
    });

}
