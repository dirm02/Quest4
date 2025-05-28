import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
    selector: 'app-membership-addons',
    templateUrl: './membership-addons.component.html',
    styleUrls: ['./membership-addons.component.css'],
    standalone: false
})
export class MembershipAddonsComponent {
  public selectedValue = '';
  selectedList: data[] = [
    {value: 'Select Category'},
    {value: 'Category 1'},
    {value: 'Category 2'},
  ];
}
