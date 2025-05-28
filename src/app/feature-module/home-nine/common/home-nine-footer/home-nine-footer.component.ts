import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-home-nine-footer',
    templateUrl: './home-nine-footer.component.html',
    styleUrls: ['./home-nine-footer.component.css'],
    standalone: false
})
export class HomeNineFooterComponent {
public routes = routes
}
