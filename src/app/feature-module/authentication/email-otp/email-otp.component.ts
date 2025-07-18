import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-email-otp',
    templateUrl: './email-otp.component.html',
    styleUrls: ['./email-otp.component.css'],
    standalone: false
})
export class EmailOtpComponent {
  public routes = routes;
  public verificationCode = [];
  public oneTimePassword = {
    data1: "",
    data2: "",
    data3: "",
    data4: ""
  };
  public ValueChanged(data: string, box: string): void {
    if (box == 'digit-1' && data.length > 0) {
      document.getElementById('digit-2')?.focus();
    } else if (box == 'digit-2' && data.length > 0) {
      document.getElementById('digit-3')?.focus();
    } else if (box == 'digit-3' && data.length > 0) {
      document.getElementById('digit-4')?.focus();
    } else {
      return
    }
  }
  public tiggerBackspace(data: string, box: string) {
    let StringyfyData;
    if (data) {
      StringyfyData = data.toString();
    } else {
      StringyfyData = null;
    }
    if (box == 'digit-4' && StringyfyData == null) {
      document.getElementById('digit-3')?.focus();
    } else if (box == 'digit-3' && StringyfyData == null) {
      document.getElementById('digit-2')?.focus();
    } else if (box == 'digit-2' && StringyfyData == null) {
      document.getElementById('digit-1')?.focus();
    }
  }

  constructor(private router: Router) {}
  public navigate() {
    this.router.navigate([routes.resetPassword]);
  }
}
