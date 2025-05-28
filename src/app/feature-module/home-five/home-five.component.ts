import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
import { caters, featuredCaters, partners, testimonialProvider, topCaters, usefulBlogs } from 'src/app/shared/models/pages-model';
interface data {
  value: string;
}
@Component({
    selector: 'app-home-five',
    templateUrl: './home-five.component.html',
    styleUrls: ['./home-five.component.css'],
    standalone: false
})
export class HomeFiveComponent implements OnInit{
  public routes = routes;
  public strokeValue = 0;
  public progress = 0;
  public selectedValue = '';
  public caters: caters[] = [];
  public featuredCaters: featuredCaters[] = [];
  public topCaters: topCaters[] = [];
  public clientReview: testimonialProvider[] = [];
  public company: partners[] = [];
  public usefulBlogs: usefulBlogs[] = [];



  public catersOwl: OwlOptions = {
    margin: 24,
    loop: true,
    dots: true,
    navSpeed: 700,
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
  public featuredCatersOwl: OwlOptions = {
    margin: 24,
    loop: true,
    dots: true,
    navSpeed: 700,
    navText: [
      "<i class='feather icon-arrow-left'></i>",
      "<i class='feather icon-arrow-right'></i>",
    ],
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
  public topCatersOwl: OwlOptions = {
    margin: 24,
    loop: true,
    dots: true,
    navSpeed: 700,
    navText: [
      "<i class='feather icon-arrow-left'></i>",
      "<i class='feather icon-arrow-right'></i>",
    ],
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
  public clientReviewOwl: OwlOptions = {
    margin: 24,
    loop: true,
    dots: true,
    navSpeed: 700,
    navText: [
      "<i class='feather icon-arrow-left'></i>",
      "<i class='feather icon-arrow-right'></i>",
    ],
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
  public companyOwl: OwlOptions = {
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
        items: 6,
      },
      1170: {
        items: 6,
      },
    },
  };
  public usefulBlogsOwl: OwlOptions = {
    margin: 24,
    loop: true,
    dots: true,
    navSpeed: 700,
    navText: [
      "<i class='feather icon-arrow-left'></i>",
      "<i class='feather icon-arrow-right'></i>",
    ],
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
  public testimonial: OwlOptions = {
    margin: 24,
    loop: true,
    dots: true,
    navSpeed: 700,
    navText: [
      "<i class='feather icon-arrow-left'></i>",
      "<i class='feather icon-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 5,
      },
      1170: {
        items: 5,
      },
    },
  };
  selectedList: data[] = [
    {value: 'Select Category'},
    {value: 'Tornoto'},
    {value: 'Texas'},
];
constructor(private data: DataService) {
  this.caters = this.data.caters;
  this.featuredCaters = this.data.featuredCaters;
  this.clientReview = this.data.clientReview;
  this.company = this.data.company;
  this.usefulBlogs = this.data.usefulBlogs;
  this.topCaters = this.data.topCaters;
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
