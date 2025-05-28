import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-session-expired',
    templateUrl: './session-expired.component.html',
    styleUrls: ['./session-expired.component.css'],
    standalone: false
})
export class SessionExpiredComponent {
  public routes = routes;
}
