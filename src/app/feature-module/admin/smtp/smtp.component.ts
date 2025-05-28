import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-smtp',
    templateUrl: './smtp.component.html',
    styleUrls: ['./smtp.component.css'],
    standalone: false
})
export class SmtpComponent {
  public routes = routes;
}
