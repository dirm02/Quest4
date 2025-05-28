import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
    selector: 'app-home-five-footer',
    templateUrl: './home-five-footer.component.html',
    styleUrls: ['./home-five-footer.component.css'],
    standalone: false
})
export class HomeFiveFooterComponent {
public routes = routes;

public selectedValue1 = '';
public selectedValue2 = '';

selectedList1: data[] = [
  { value: 'English' },
  { value: 'France' },
  { value: 'Spanish' },
];
selectedList2: data[] = [
  { value: 'US Dollars' },
  { value: 'INR' },
  { value: 'Kuwait' },
];
}
