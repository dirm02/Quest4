import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { register, passwordResponce } from 'src/app/shared/models/register.model';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css'],
    standalone: false
})
export class ResetPasswordComponent {
  public routes = routes;
  public registerForm:register={}
  public passwordResponce:passwordResponce={};
  public passwordClass1 = false;
  public passwordClass2 = false;


  togglePassword1() {
    this.passwordClass1 = !this.passwordClass1;
  }
  togglePassword2() {
    this.passwordClass2 = !this.passwordClass2;
  }
  public onChangePassword(password:string){
    if(password.match(/^$|\s+/)) {
      this.passwordResponce.passwordResponceText = "whitespaces are not allowed"
      this.passwordResponce.passwordResponceImage = ""
      this.passwordResponce.passwordResponceKey = ''
      return
    }
    if(password.length == 0){
      this.passwordResponce.passwordResponceText = ""
      this.passwordResponce.passwordResponceImage = ""
      this.passwordResponce.passwordResponceKey = ''
      return
    }
    if (password.length < 8) {
      this.passwordResponce.passwordResponceText = "Weak. Must contain at least 8 characters"
      this.passwordResponce.passwordResponceImage = "assets/admin/img/icons/angry.svg"
      this.passwordResponce.passwordResponceKey = '0'
    } else if (password.search(/[a-z]/) < 0) {
      this.passwordResponce.passwordResponceText = "Average. Must contain at least 1 upper case and number"
      this.passwordResponce.passwordResponceImage = "assets/admin/img/icons/anguish.svg"
      this.passwordResponce.passwordResponceKey = '1'
    } else if(password.search(/[A-Z]/) < 0) {
      this.passwordResponce.passwordResponceText = "Average. Must contain at least 1 upper case and number"
      this.passwordResponce.passwordResponceImage = "assets/admin/img/icons/anguish.svg"
      this.passwordResponce.passwordResponceKey = '1'
    } else  if (password.search(/[0-9]/) < 0) {
      this.passwordResponce.passwordResponceText= "Average. Must contain at least 1 upper case and number"
      this.passwordResponce.passwordResponceImage = "assets/admin/img/icons/anguish.svg"
      this.passwordResponce.passwordResponceKey = '1'
    } else  if (password.search(/(?=.*?[#?!@$%^&*-])/) < 0) {
      this.passwordResponce.passwordResponceText = "Almost. Must contain special symbol"
      this.passwordResponce.passwordResponceImage = "assets/admin/img/icons/smile.svg"
      this.passwordResponce.passwordResponceKey = '2'
    }else {
      this.passwordResponce.passwordResponceText = "Awesome! You have a secure password."
        this.passwordResponce.passwordResponceImage = "assets/admin/img/icons/smile.svg"
         this.passwordResponce.passwordResponceKey = '3'
     }
  }

  constructor(private router: Router) {}
  public navigate() {
    this.router.navigate([routes.success]);
  }
}
