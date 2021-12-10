import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoged, UserLogin } from 'src/app/auth/models/user-login';
import { LoginService } from '../../services/login.service';
import { UserComplete } from '../../models/user-structure';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user= new UserLogin();
  

  loginForm: FormGroup;

  constructor(private route:Router, private loginService:  LoginService) { 
    this.loginForm  = new FormGroup({
    
      email : new FormControl(''),
      password  : new FormControl(''),
      
    })

    console.log(this.loginForm);
    
    
  }
  
  onSubmit(formDirective:FormGroupDirective){
    
    console.log(this.loginForm);
    
    this.user  = this.loginForm.value;
    
    console.log(this.user);
    formDirective.resetForm();
    this.loginForm.reset();
    
       
      console.log(this.user.email);
      console.log(this.user.password);
      
      this.loginService.login (this.user).subscribe(  (resp:UserComplete) => {
  
      console.log("Respuesta del servidor de login")
      console.log(resp);
      let userLoged= new UserLoged('');
      if(resp.rol.id==2){
      userLoged.id=resp.id.toString()
      userLoged.fullName=resp.fullName;
      userLoged.email=resp.email;
      console.log(userLoged)
      localStorage.setItem('userLoged', JSON.stringify(userLoged));
      let loged = JSON.parse(localStorage.getItem('userLoged')||"");
      console.log(loged);

      }
      else{
        alert("Usuario no permitido");
      }    
      
  }
  );
  
  }
  redirect(){
    this.route.navigate(['home']);
  }
  
  



  ngOnInit(){
    
  }
}

