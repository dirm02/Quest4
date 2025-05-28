import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeThreeRoutingModule } from './home-three-routing.module';
import { HomeThreeComponent } from './home-three.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeThreeHeaderComponent } from './common/home-three-header/home-three-header.component';
import { HomeThreeFooterComponent } from './common/home-three-footer/home-three-footer.component';


@NgModule({
  declarations: [
    HomeThreeComponent,
    HomeThreeHeaderComponent,
    HomeThreeFooterComponent
  ],
  imports: [
    CommonModule,
    HomeThreeRoutingModule,
    SharedModule
  ]
})
export class HomeThreeModule { }
