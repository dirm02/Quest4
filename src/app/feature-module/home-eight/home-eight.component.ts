import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/data/data.service';
import { blog, popularSection, pricingPlan, professionals, testimonialProvider } from 'src/app/shared/models/pages-model';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
    selector: 'app-home-eight',
    templateUrl: './home-eight.component.html',
    styleUrls: ['./home-eight.component.css'],
    standalone: false
})
export class HomeEightComponent implements OnInit{
  public routes = routes;
  public pricingPlan: pricingPlan[] = [];
  public professionals: professionals[] = [];
  public customers: testimonialProvider[] = [];
  public blog: blog[] = [];
  public popularSection: popularSection[] = [];
  public strokeValue = 0;
  public progress = 0;
  public selectedValue = '';

  public pricingPlanOwl: OwlOptions = {
    margin: 24,
    loop: true,
    dots: false,
    nav:true,
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
        items: 6,
      },
      1170: {
        items: 6,
      },
    },
  };
  public professionalsOwl: OwlOptions = {
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
        items: 3,
      },
      1170: {
        items: 3,
      },
    },
  };
  public customersOwl: OwlOptions = {
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
  public blogOwl: OwlOptions = {
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
        items: 3,
      },
      1170: {
        items: 3,
      },
    },
  };
  selectedList: data[] = [
    { value: 'Select Service type' },
    { value: 'Tornoto' },
    { value: 'Texas' },
  ];
  constructor(private data: DataService) {
    this.pricingPlan = this.data.pricingPlan;
    this.professionals = this.data.professionals;
    this.customers = this.data.customers;
    this.blog = this.data.blog;
    this.popularSection = this.data.popularSection;
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
