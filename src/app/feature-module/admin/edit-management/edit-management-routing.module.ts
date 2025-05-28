import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditManagementComponent } from './edit-management.component';

const routes: Routes = [{ path: '', component: EditManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditManagementRoutingModule { }
