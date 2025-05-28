import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeNineRoutingModule } from './home-nine-routing.module';
import { HomeNineComponent } from './home-nine.component';
import { HomeNineHeaderComponent } from './common/home-nine-header/home-nine-header.component';
import { HomeNineFooterComponent } from './common/home-nine-footer/home-nine-footer.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeNineComponent,
    HomeNineHeaderComponent,
    HomeNineFooterComponent
  ],
  imports: [
    CommonModule,
    HomeNineRoutingModule,
    SharedModule
  ]
})
export class HomeNineModule { }
