import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import intlTelInput from 'intl-tel-input';
@Component({
    selector: 'app-provider-signup',
    templateUrl: './provider-signup.component.html',
    styleUrls: ['./provider-signup.component.css'],
    standalone: false
})
export class ProviderSignupComponent {
  public routes = routes;
  public passwordClass = false;

  togglePassword() {
    this.passwordClass = !this.passwordClass;
  }
  constructor(private router: Router) {}
  public navigate() {
    this.router.navigate([routes.login]);
  }
  ngAfterViewInit(): void {
    const input = document.querySelector('#phone') as HTMLInputElement;
    const input2 = document.querySelector('#phone2') as HTMLInputElement;
    intlTelInput(input, {
      initialCountry: 'us',
      preferredCountries: ['us', 'gb', 'in'],
      utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js'
    }as any);
    intlTelInput(input2, {
      initialCountry: 'us',
      preferredCountries: ['us', 'gb', 'in'],
      utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js'
    }as any);
        // Restrict input to numbers, "+", and allowed characters
        input.addEventListener('input', () => {
          input.value = input.value.replace(/[^0-9+()-\s]/g, ''); // Removes any character not allowed
        });
        input2.addEventListener('input', () => {
          input2.value = input2.value.replace(/[^0-9+()-\s]/g, ''); // Removes any character not allowed
        });
  }
}
