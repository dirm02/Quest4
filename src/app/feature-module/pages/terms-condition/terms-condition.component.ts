import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-terms-condition',
    templateUrl: './terms-condition.component.html',
    styleUrls: ['./terms-condition.component.css'],
    standalone: false
})
export class TermsConditionComponent {
  public routes = routes;
}
