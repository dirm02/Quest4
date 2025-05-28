import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-home-four-footer',
    templateUrl: './home-four-footer.component.html',
    styleUrls: ['./home-four-footer.component.css'],
    standalone: false
})
export class HomeFourFooterComponent {
  public routes = routes;

}
