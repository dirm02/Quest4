import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/data/data.service';
import { blogs, partners, service5, serviceWidget, testimonialsData, topExperts } from 'src/app/shared/models/pages-model';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}

@Component({
    selector: 'app-home-nine',
    templateUrl: './home-nine.component.html',
    styleUrls: ['./home-nine.component.css'],
    standalone: false
})
export class HomeNineComponent implements OnInit{
  public routes = routes;
  public topExperts: topExperts[] = [];
  public strokeValue = 0;
  public progress = 0;
  public selectedValue1 = '';
  public selectedValue2 = '';

  public services: service5[] = [];
  public testimonialsData: testimonialsData[] = [];
  public partners: partners[] = [];
  public blogs: blogs[] = [];
  public serviceWidget: serviceWidget[] = [];



  public slideConfig = {
    loop: true,
    margin: 24,
    nav: false,
    dots: false,
    smartSpeed: 2000,
    lazyLoad: 'ondemand',
    infinite: true,
    slidesToShow: 1,
    arrow:false
  };
  public testimonal: OwlOptions = {
    margin: 24,
    loop: true,
    dots: false,
    nav:true,
    navSpeed: 700,
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      },
    },
  };
  public topExpertsOwl: OwlOptions = {
    margin: 24,
    loop: true,
    dots: false,
    nav:true,
    navSpeed: 700,
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 4,
      },
      1170: {
        items: 3,
      },
    },
  };
  public servicesOwl: OwlOptions = {
    margin: 24,
    loop: true,
    dots: false,
    nav:true,
    navSpeed: 700,
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
        items: 5,
      },
    },
  };
  public blogsOwl: OwlOptions = {
    margin: 24,
    loop: true,
    dots: false,
    nav:true,
    navSpeed: 700,
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

constructor(public data:DataService){
  this.topExperts = this.data.topExperts;
  this.services = this.data.services;
  this.testimonialsData = this.data.testimonialsData;
  this.partners = this.data.partners;
  this.blogs = this.data.blogs;
  this.serviceWidget = this.data.serviceWidget;

}
selectedList1: data[] = [
  {value: 'Job Title, Keywords'},
  {value: 'Tornoto'},
  {value: 'Texas'},
];
selectedList2: data[] = [
  {value: 'Choose Location'},
  {value: 'Tornoto'},
  {value: 'Texas'},
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
