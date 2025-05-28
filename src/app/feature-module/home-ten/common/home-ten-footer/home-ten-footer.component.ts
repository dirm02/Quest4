import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-home-ten-footer',
    templateUrl: './home-ten-footer.component.html',
    styleUrls: ['./home-ten-footer.component.css'],
    standalone: false
})
export class HomeTenFooterComponent {
  public routes = routes;
}
