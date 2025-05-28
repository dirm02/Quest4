import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
import { init } from 'ityped';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    standalone: false
})
export class HomeComponent {
  public routes = routes
  public blogslider: OwlOptions = {
    loop: true,
    margin: 24,
    nav: true,
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
        items: 4
      }
    }
  };
  public testimonialsliderOwlOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: true,
    dots: false,
    smartSpeed: 2000,
    navText: ["<i class='ti ti-chevron-left'></i>", "<i class='ti ti-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };
  public popularsliderOwlOptions: OwlOptions = {
    loop: false,
    margin: 24,
    nav: true,
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
    }
  };
  public servicesliderOwlOptions: OwlOptions = {
    loop: false,
    margin: 24,
    nav: true,
    dots: true,
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
    }
  };
  public imagesliderOwlOptions: OwlOptions = {
    loop: false,
    margin: 24,
    nav: true,
    dots: true,
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
    }
  };
  public featuresliderOwlOptions: OwlOptions = {
    loop: false,
    margin: 24,
    nav: true,
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
    }
  };
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


data = {
  like: false
};
constructor( private router : Router){

}

public navigate(){
  this.router.navigate(['bookings/booking-details']);
}
@ViewChild('typedElement', { static: false }) typedElement!: ElementRef;
ngAfterViewInit(): void {
  init(this.typedElement.nativeElement, {
    strings: ['Carpenters','Stylist', 'Builders'],
    typeSpeed: 150,  // Speed of typing
    backSpeed: 80,   // Speed of backspacing
    loop: true       // Loop the typing effect
  });
}
}
