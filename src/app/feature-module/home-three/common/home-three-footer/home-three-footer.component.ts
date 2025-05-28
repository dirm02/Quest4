import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-home-three-footer',
    templateUrl: './home-three-footer.component.html',
    styleUrls: ['./home-three-footer.component.css'],
    standalone: false
})
export class HomeThreeFooterComponent {
  public routes = routes;

}
