import { Component } from '@angular/core';
import { CommonService } from 'src/app/shared/common/common.service';
import { DataService } from 'src/app/shared/data/data.service';
import { header } from 'src/app/shared/models/pages-model';
import { routes } from 'src/app/shared/routes/routes';
import { SidebarService } from 'src/app/shared/side-bar/pages-sidebar.service';
import { SideBarService } from 'src/app/shared/side-bar/side-bar.service';

@Component({
    selector: 'app-home-header',
    templateUrl: './home-header.component.html',
    styleUrl: './home-header.component.css',
    standalone: false
})
export class HomeHeaderComponent {
  public routes = routes;
  header: Array<header> = [];
  base = '';
  page = '';
  last = '';
  
  
  constructor(
    private common: CommonService,
    private data: DataService,
    private sidebarService: SidebarService
  ) {
    this.common.base.subscribe((res: string) => {
      this.base = res;
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
    });
    this.header = this.data.header;
  }
  
  public toggleSidebar(): void {
    this.sidebarService.openSidebar();
  }
  public hideSidebar(): void {
    this.sidebarService.closeSidebar();
  }

  currentStep = 0;
  selectedFieldSet: number[] = [0];
  nextStep() {
    if (this.selectedFieldSet[0] < 13) {
      this.selectedFieldSet[0]++;
      
    }
    
  }
  previousStep() {
    if (this.selectedFieldSet[0] > 0) {
      // Move to the previous step
      this.selectedFieldSet[0]--;
      
     
    }
  }
  isOffcanvasOpen = false;

  toggleOffcanvas() {
    this.isOffcanvasOpen = !this.isOffcanvasOpen;
  }
  closeOffcanvas() {
    this.isOffcanvasOpen = false;
  }
}
