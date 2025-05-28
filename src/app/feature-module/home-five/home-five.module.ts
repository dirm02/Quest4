import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFiveRoutingModule } from './home-five-routing.module';
import { HomeFiveComponent } from './home-five.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeFiveHeaderComponent } from './common/home-five-header/home-five-header.component';
import { HomeFiveFooterComponent } from './common/home-five-footer/home-five-footer.component';


@NgModule({
  declarations: [
    HomeFiveComponent,
    HomeFiveHeaderComponent,
    HomeFiveFooterComponent
   
  ],
  imports: [
    CommonModule,
    HomeFiveRoutingModule,
    SharedModule
  ]
})
export class HomeFiveModule { }
