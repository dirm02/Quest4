import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFourRoutingModule } from './home-four-routing.module';
import { HomeFourComponent } from './home-four.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeFourHeaderComponent } from './common/home-four-header/home-four-header.component';
import { HomeFourFooterComponent } from './common/home-four-footer/home-four-footer.component';


@NgModule({
  declarations: [
    HomeFourComponent,
    HomeFourHeaderComponent,
    HomeFourFooterComponent
   
  ],
  imports: [
    CommonModule,
    HomeFourRoutingModule,
    SharedModule
  ]
})
export class HomeFourModule { }
