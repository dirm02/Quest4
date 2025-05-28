import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-customer-grid',
    templateUrl: './customer-grid.component.html',
    styleUrl: './customer-grid.component.css',
    standalone: false
})
export class CustomerGridComponent {
  public routes = routes

}
