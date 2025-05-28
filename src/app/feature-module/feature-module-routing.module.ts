import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureModuleComponent } from './feature-module.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureModuleComponent,
    children: [
      {
        path: '',
        redirectTo: 'pages',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },

      {
        path: 'customers',
        loadChildren: () =>
          import('./customers/customers.module').then((m) => m.CustomersModule),
      },
      {
        path: 'providers',
        loadChildren: () =>
          import('./providers/providers.module').then((m) => m.ProvidersModule),
      },
      {
        path: 'error-page',
        loadChildren: () =>
          import('./error-page/error-page.module').then(
            (m) => m.ErrorPageModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },

      {
        path: 'home-two',
        loadChildren: () =>
          import('./home-two/home-two.module').then((m) => m.HomeTwoModule),
      },

      {
        path: 'home-three',
        loadChildren: () =>
          import('./home-three/home-three.module').then(
            (m) => m.HomeThreeModule
          ),
      },
      {
        path: 'home-four',
        loadChildren: () =>
          import('./home-four/home-four.module').then((m) => m.HomeFourModule),
      },
      {
        path: 'home-five',
        loadChildren: () =>
          import('./home-five/home-five.module').then((m) => m.HomeFiveModule),
      },
      {
        path: 'home-six',
        loadChildren: () =>
          import('./home-six/home-six.module').then((m) => m.HomeSixModule),
      },
      {
        path: 'home-seven',
        loadChildren: () =>
          import('./home-seven/home-seven.module').then(
            (m) => m.HomeSevenModule
          ),
      },
      {
        path: 'home-eight',
        loadChildren: () =>
          import('./home-eight/home-eight.module').then(
            (m) => m.HomeEightModule
          ),
      },
      {
        path: 'home-nine',
        loadChildren: () =>
          import('./home-nine/home-nine.module').then((m) => m.HomeNineModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'home-ten',
        loadChildren: () =>
          import('./home-ten/home-ten.module').then((m) => m.HomeTenModule),
      },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureModuleRoutingModule {}
