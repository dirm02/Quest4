import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-storage-settings',
    templateUrl: './storage-settings.component.html',
    styleUrls: ['./storage-settings.component.css'],
    standalone: false
})
export class StorageSettingsComponent {
  public routes = routes;
}
