import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTenRoutingModule } from './home-ten-routing.module';
import { HomeTenComponent } from './home-ten.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeTenHeaderComponent } from './common/home-ten-header/home-ten-header.component';
import { HomeTenFooterComponent } from './common/home-ten-footer/home-ten-footer.component';


@NgModule({
  declarations: [
    HomeTenComponent,
    HomeTenHeaderComponent,
    HomeTenFooterComponent
  ],
  imports: [
    CommonModule,
    HomeTenRoutingModule,
    SharedModule
  ]
})
export class HomeTenModule { }
