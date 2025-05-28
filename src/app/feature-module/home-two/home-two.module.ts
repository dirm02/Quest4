import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTwoRoutingModule } from './home-two-routing.module';
import { HomeTwoComponent } from './home-two.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeTwoHeaderComponent } from './common/home-two-header/home-two-header.component';
import { HomeTwoFooterComponent } from './common/home-two-footer/home-two-footer.component';


@NgModule({
  declarations: [
    HomeTwoComponent,
    HomeTwoHeaderComponent,
    HomeTwoFooterComponent,
  ],
  imports: [
    CommonModule,
    HomeTwoRoutingModule,
    SharedModule
  ]
})
export class HomeTwoModule { }
