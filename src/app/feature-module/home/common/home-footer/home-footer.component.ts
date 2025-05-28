import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-home-footer',
    templateUrl: './home-footer.component.html',
    styleUrl: './home-footer.component.css',
    standalone: false
})
export class HomeFooterComponent {
  public routes = routes
}
