import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/data/data.service';
import { featuredStylists, latestSlider, partners, reviews, serviceSection } from 'src/app/shared/models/pages-model';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
    selector: 'app-home-four',
    templateUrl: './home-four.component.html',
    styleUrls: ['./home-four.component.css'],
    standalone: false
})
export class HomeFourComponent{
  public routes = routes;
  public strokeValue = 0;
  public progress = 0;
  public selectedValue = '';
  public serviceSection: serviceSection[] = [];
  public featuredStylists: featuredStylists[] = [];
  public clientImg: partners[] = [];
  public reviews: reviews[] = [];
  public latestSlider: latestSlider[] = [];

  public slideConfig = {
    slidesToShow: 1,
    SlidesToScroll: 1,
    asNavFor:'.client-img',
    dots: false,
    nav: false
  };
  selectedList: data[] = [
    { value: 'Select Service type' },
    { value: 'Tornoto' },
    { value: 'Texas' },
  ];
  
public serviceSectionOwl: OwlOptions = {
  margin: 24,
  loop: true,
  dots: false,
  navSpeed: 700,
  nav:true,
  navText: [
    "<i class='feather icon-arrow-left'></i>",
    "<i class='feather icon-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 4,
    },
    1170: {
      items: 4,
    },
  },
};
public featuredStylistsOwl: OwlOptions = {
  margin: 24,
  loop: true,
  dots: false,
  navSpeed: 700,
  nav:true,
  navText: [
    "<i class='feather icon-arrow-left'></i>",
    "<i class='feather icon-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 4,
    },
    1170: {
      items: 4,
    },
  },
};
public clientImgOwl: OwlOptions = {
  margin: 24,
  loop: true,
  dots: false,
  navSpeed: 700,
  responsive: {
    0: {
      items: 3,
    },
    768: {
      items: 3,
    },
    1170: {
      items: 3,
    },
  },
};
public latestSliderOwl: OwlOptions = {
  margin: 24,
  loop: true,
  dots: false,
  nav:false,
  navSpeed: 700,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 4,
    },
    1170: {
      items: 4,
    },
  },
};
constructor(private data: DataService) {
  this.serviceSection = this.data.serviceSection;
  this.featuredStylists = this.data.featuredStylists;
  this.clientImg = this.data.clientImg;
  this.reviews = this.data.reviews;
  this.latestSlider = this.data.latestSlider;
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
  public scrollToTop(): void {
    window.scrollTo(0, 0);
  }
  slideConfig2={
    slidesToShow: 4,
    SlidesToScroll: 1,
    asNavFor:'.say-about',
    dots: false,
    nav: false,
    centerMode:true,
    infinite: true,
    focusOnSelect: true
  }

}
