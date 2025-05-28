import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderSignupRoutingModule } from './provider-signup-routing.module';
import { ProviderSignupComponent } from './provider-signup.component';


@NgModule({
  declarations: [
    ProviderSignupComponent
  ],
  imports: [
    CommonModule,
    ProviderSignupRoutingModule,
  ]
})
export class ProviderSignupModule { }
