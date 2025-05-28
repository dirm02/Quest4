import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common/common.service';
import { DataService } from 'src/app/shared/data/data.service';
import { header } from 'src/app/shared/models/pages-model';
import { routes } from 'src/app/shared/routes/routes';
import { SidebarService } from 'src/app/shared/side-bar/pages-sidebar.service';

@Component({
    selector: 'app-home-six-header',
    templateUrl: './home-six-header.component.html',
    styleUrls: ['./home-six-header.component.css'],
    standalone: false
})
export class HomeSixHeaderComponent {
  header: Array<header> = [];
  base = '';
  page = '';
  last = '';
  public routes = routes;
  public white_bg = false;
  sticky = false;
  elementPosition = 0;

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.elementPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
    if (windowScroll == 0) {
      this.white_bg = false;
    } else {
      this.white_bg = true;
    }
  }
  constructor(
    public data: DataService,
    public router: Router,
    private common: CommonService,
    private sidebarService: SidebarService
  ) {
    this.common.base.subscribe((base: string) => {
      this.base = base;
    });
    this.common.page.subscribe((page: string) => {
      this.page = page;
    });
    this.common.last.subscribe((last: string) => {
      this.last = last;
    });
    this.header = this.data.header;
  }
  public toggleSidebar(): void {
    this.sidebarService.openSidebar();
  }
  public hideSidebar(): void {
    this.sidebarService.closeSidebar();
  }
}
