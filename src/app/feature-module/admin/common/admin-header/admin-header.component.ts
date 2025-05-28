import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { SideBarService } from 'src/app/shared/side-bar/side-bar.service';

@Component({
    selector: 'app-admin-header',
    templateUrl: './admin-header.component.html',
    styleUrls: ['./admin-header.component.css'],
    standalone: false
})
export class AdminHeaderComponent {
public routes = routes;
elem=document.documentElement
public miniSidebar = false;

fullscreen() {
  if(!document.fullscreenElement) {
    this.elem.requestFullscreen();
  }
  else {
    document.exitFullscreen();
  }
}

constructor(public router: Router,private sideBar: SideBarService) {
  this.sideBar.toggleSideBar.subscribe((res: string) => {
    if (res == 'true') {
      this.miniSidebar = true;
    } else {
      this.miniSidebar = false;
    }
  });
}

public toggleSideBar(): void {
  this.sideBar.switchAdminSideMenuPosition();
}
public toggleAdminMobileSideBar(): void {
  this.sideBar.switchAdminMobileSideBarPosition();
  }
}
