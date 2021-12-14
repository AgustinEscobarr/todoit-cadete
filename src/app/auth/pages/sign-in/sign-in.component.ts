import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoged, UserLogin } from 'src/app/auth/models/user-login';
import { LoginService } from '../../services/login.service';
import { UserComplete } from '../../models/user-structure';
import { AlertMessage } from 'src/app/dashboard/models/menssage-dialog';
import { SignInAlertComponent } from '../../components/dialogs/sign-in-alert/sign-in-alert.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  hide :boolean = true;
  user= new UserLogin();
  

  loginForm: FormGroup;

  constructor(private route:Router, private loginService:  LoginService, public dialog:MatDialog) { 
    this.loginForm  = new FormGroup({
    
      email : new FormControl(''),
      password  : new FormControl(''),
      
    })

   
    
    
  }
  
  onSubmit(formDirective:FormGroupDirective){
    
   
    
    this.user  = this.loginForm.value;
    
    console.log(this.user);
    formDirective.resetForm();
    this.loginForm.reset();
    
       
      
      
      this.loginService.login (this.user).subscribe(  (resp:UserComplete) => {
  
      
      
      let userLoged= new UserLoged('');
      if(resp.rol.id==2){
        userLoged.id=resp.id.toString()
        userLoged.fullName=resp.fullName;
        userLoged.email=resp.email;
        
        localStorage.setItem('userLoged', JSON.stringify(userLoged));
        let loged = JSON.parse(localStorage.getItem('userLoged')||"");
        
        let alert :AlertMessage={
          validate:true,
          menssage:"Bienvenido"
        }
        this.dialog.open(SignInAlertComponent, {data:alert});
        
        this.redirect();

      }
      else{
        let alert :AlertMessage={
          validate:false,
          menssage:"Usuario no Permitido"
        }
        this.dialog.open(SignInAlertComponent, {data:alert});
      }    
      
  },
  error=>{
    let alert :AlertMessage={
      validate:false,
      menssage:"Error del servidor: No se encuentra el usuario."
    }
    this.dialog.open(SignInAlertComponent, {data:alert})

  }
  );
  
  }
  redirect(){
    this.route.navigate(['dashboard']);
  }
  
  



  ngOnInit(){
    
  }
}

