import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-cronjob',
    templateUrl: './cronjob.component.html',
    styleUrls: ['./cronjob.component.css'],
    standalone: false
})
export class CronjobComponent {
  public routes = routes;
}
