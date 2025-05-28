import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-password-recovery',
    templateUrl: './password-recovery.component.html',
    styleUrls: ['./password-recovery.component.css'],
    standalone: false
})
export class PasswordRecoveryComponent {
  public routes = routes;
}
