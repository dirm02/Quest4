import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-available-plugins',
    templateUrl: './available-plugins.component.html',
    styleUrls: ['./available-plugins.component.css'],
    standalone: false
})
export class AvailablePluginsComponent {
  public routes = routes;
}
