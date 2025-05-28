import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}

@Component({
    selector: 'app-home-two-footer',
    templateUrl: './home-two-footer.component.html',
    styleUrls: ['./home-two-footer.component.css'],
    standalone: false
})
export class HomeTwoFooterComponent {
  public selectedValue1 = '';
  public selectedValue2 = '';
public routes = routes;
selectedList1: data[] = [
  { value: 'English' },
  { value: 'France' },
  { value: 'Spanish' },
];
selectedList2: data[] = [
  { value: 'Dollars' },
  { value: 'INR' },
  { value: 'Kuwait' },
];
}
