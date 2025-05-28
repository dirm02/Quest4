import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
    selector: 'app-home-six',
    templateUrl: './home-six.component.html',
    styleUrls: ['./home-six.component.css'],
    standalone: false
})
export class HomeSixComponent implements OnInit{
  public selectedValue = '';
  public routes = routes;
  public strokeValue = 0;
  public progress = 0;

  selectedList: data[] = [
    { value: 'Service type' },
    { value: 'Tornoto' },
    { value: 'Texas' },
  ];

  ngOnInit(): void {
    this.calculateScrollPercentage();
  }
  // scroll the page to top position
  public scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  // function to calculate the scroll progress
  private calculateScrollPercentage(): void {
    window.addEventListener('scroll', () => {
      const body = document.body,
        html = document.documentElement;
      //gets the total height of page till scroll
      const totalheight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      // calculates the total stroke value
      this.progress = totalheight;
      const currentDistance = window.scrollY / (totalheight / 3000);
      // calculates the current stroke value
      this.strokeValue = totalheight - currentDistance / 8;
      // condition to hide scroll progress if page in top
      if (window.scrollY == 0) {
        this.strokeValue = totalheight;
      }
      // condition to make scroll progress to 100 if page in bottom
      if (window.innerHeight + window.scrollY >= totalheight) {
        this.strokeValue = 0;
      }
    });
  }
}
