import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-sms-settings',
    templateUrl: './sms-settings.component.html',
    styleUrls: ['./sms-settings.component.css'],
    standalone: false
})
export class SmsSettingsComponent {
  public routes = routes;
}
