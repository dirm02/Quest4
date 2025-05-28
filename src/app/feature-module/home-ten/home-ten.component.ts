import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/data/data.service';
import { blogData, featuredCategories, partners, popularService, testimonialProvider, topProvider } from 'src/app/shared/models/pages-model';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-home-ten',
    templateUrl: './home-ten.component.html',
    styleUrl: './home-ten.component.css',
    standalone: false
})
export class HomeTenComponent {
  public routes = routes;
  public featuredCategories: featuredCategories[] = [];
  public popularService: popularService[] = [];
  public topProvider: topProvider[] = [];
  public featuredCategory: featuredCategories[] = [];
  public testimonialProvider: testimonialProvider[] = [];
  public blogData: blogData[] = [];
  public partners: partners[] = [];
  public strokeValue = 0;
  public progress = 0;

  public featuredCategoriesOwl: OwlOptions = {
    margin: 24,
    loop: true,
    dots: true,
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
        items: 4,
      },
      1170: {
        items: 3,
      },
    },
  };
  public popularServiceOwl: OwlOptions = {
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
  public featuredCategoryOwl: OwlOptions = {
    margin: 24,
    loop: true,
    dots: false,
    nav: true,
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
  public topProviderOwl: OwlOptions = {
    margin: 24,
    loop: true,
    dots: true,
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
        items: 3,
      },
      1170: {
        items: 4,
      },
    },
  };
  public testimonialProviderOwl: OwlOptions = {
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
        items: 3,
      },
      1170: {
        items: 3,
      },
    },
  };
  public blogDataOwl: OwlOptions = {
    margin: 24,
    loop: true,
    dots: true,
    nav: false,
    
    
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
    loop: true,
    dots:false,
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
  constructor(private data : DataService){
    this.featuredCategories = this.data.featuredCategories;
    this.popularService = this.data.popularService;
    this.featuredCategory = this.data.featuredCategory;
    this.topProvider = this.data.topProvider;
    this.testimonialProvider = this.data.testimonialProvider;
    this.blogData = this.data.blogData;
    this.partners = this.data.partners;
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
