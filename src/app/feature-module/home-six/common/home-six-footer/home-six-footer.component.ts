import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-home-six-footer',
    templateUrl: './home-six-footer.component.html',
    styleUrls: ['./home-six-footer.component.css'],
    standalone: false
})
export class HomeSixFooterComponent {
public routes = routes
}
