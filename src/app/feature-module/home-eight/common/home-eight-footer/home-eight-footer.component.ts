import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-home-eight-footer',
    templateUrl: './home-eight-footer.component.html',
    styleUrls: ['./home-eight-footer.component.css'],
    standalone: false
})
export class HomeEightFooterComponent {
  public routes = routes
}
