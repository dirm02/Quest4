import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-gdpr-settings',
    templateUrl: './gdpr-settings.component.html',
    styleUrls: ['./gdpr-settings.component.css'],
    standalone: false
})
export class GdprSettingsComponent {
  public routes = routes;
}
