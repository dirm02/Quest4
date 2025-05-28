import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css'],
    standalone: false
})
export class OrdersComponent {
  public routes = routes;
}
