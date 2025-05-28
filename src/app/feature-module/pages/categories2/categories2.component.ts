import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-categories2',
    templateUrl: './categories2.component.html',
    styleUrl: './categories2.component.css',
    standalone: false
})
export class Categories2Component {
  public routes = routes;
}
