import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { routes } from 'src/app/shared/routes/routes';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { clientFeedbacks, indexServices, partners } from 'src/app/shared/models/pages-model';

@Component({
    selector: 'app-home-two',
    templateUrl: './home-two.component.html',
    styleUrls: ['./home-two.component.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class HomeTwoComponent implements OnInit {
  public strokeValue = 0;
  public progress = 0;
  public routes = routes;
  public featuredServices: indexServices[] = [];
  public popularServices: indexServices[] = [];
  public clientFeedbacks: clientFeedbacks[] = [];
  public partners: partners[] = [];


  public slideConfig = {
    loop: true,
    margin: 24,
    nav: true,
    dots: false,
    smartSpeed: 2000,
    lazyLoad: 'ondemand',
    infinite: true,
    slidesToShow: 2,
  };
  public featuredServicesOwl: OwlOptions = {
    margin: 24,
    dots: false,
    loop: true,
    nav: false,
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
    dots: false,
    smartSpeed: 2000,
		navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1
      },

      550: {
        items: 2
      },
      700: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
  };
  public partnersOwl: OwlOptions = {
    loop: true,
    margin: 24,
    nav: false,
    dots: false,
    smartSpeed: 2000,
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
  public clientFeedbacksOwl: OwlOptions = {
    margin: 24,
    loop: true,
    dots: false,
    navSpeed: 700,
    nav:true,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
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
  constructor(private data: DataService, private router: Router) {
    this.featuredServices = this.data.featuredServices;
    this.popularServices = this.data.popularServices;
    this.clientFeedbacks = this.data.clientFeedbacks;
    this.partners = this.data.partners;
  }

  public navigate() {
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

  currentStep = 0;
  selectedFieldSet: number[] = [0];
  progressWidth: string = '8.33333%';
  progressValue: number = 0;
  nextStep() {
    if (this.selectedFieldSet[0] < 13) {
      this.selectedFieldSet[0]++;
      this.updateProgress();
    }
    
  }


updateProgress() {
  const step = this.selectedFieldSet[0];
  const percentage = (step + 1) * 8.33333; // Calculate percentage based on step
  this.progressWidth = `${percentage}%`;
  this.progressValue = percentage;
}


previousStep() {
  if (this.selectedFieldSet[0] > 0) {
    // Move to the previous step
    this.selectedFieldSet[0]--;
    
    // Update progress bar
    this.updateProgress();
  }
}
}
