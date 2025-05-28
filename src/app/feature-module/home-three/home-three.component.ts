import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { routes } from 'src/app/shared/routes/routes';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { clientFeedbacks, indexServices, partners } from 'src/app/shared/models/pages-model';
interface data {
  value: string;
}
@Component({
    selector: 'app-home-three',
    templateUrl: './home-three.component.html',
    styleUrls: ['./home-three.component.css'],
    standalone: false
})
export class HomeThreeComponent {
  public routes = routes;
  public strokeValue = 0;
  public progress = 0;
  public largestMarketplace: partners[] = [];
  public featuredServices: indexServices[] = [];
  public popularServices: indexServices[] = [];
  public partners: partners[] = [];
  public testimonials: clientFeedbacks[] = [];
  public removedStyle  = false;

  constructor(private data: DataService, private router : Router) {
    this.largestMarketplace = this.data.largestMarketplace;
    this.featuredServices = this.data.featuredServices2;
    this.popularServices = this.data.popularServices2;
    this.partners = this.data.partners2;
    this.testimonials = this.data.testimonials;
  }
  public slideConfig = {
    loop: true,
    margin: 24,
    nav: true,
    dots: false,
    smartSpeed: 2000,
    lazyLoad: 'ondemand',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 2,
  };
  public featuredServicesOwl: OwlOptions = {
    margin: 24,
    nav: false,
    loop: true,
    dots: false,
    smartSpeed: 2000,
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 3,
      },
    },
  };
  public popularServicesOwl: OwlOptions = {
    margin: 24,
    nav: true,
    loop: true,
    dots:false,
    smartSpeed: 2000,
		navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 3,
      },
    },
  };
  public partnersOwl: OwlOptions = {
    margin: 24,
    nav: false,
    dots:false,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 5,
      },
      1170: {
        items: 6,
      },
    },
  };
  public testimonialsOwl: OwlOptions = {
    margin: 24,
    nav: false,
    dots:true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 3,
      },
    },
  };

  public removeBtn(){
    this.removedStyle = true;
  }
  public navigate(){
    this.router.navigate(['services/search']);
  }
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
