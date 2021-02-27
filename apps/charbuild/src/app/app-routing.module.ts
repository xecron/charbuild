import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

export const routes = [
    {
      path: '',
      component: AppComponent,
    //   children: [
    //     {
    //       path: '',
    //       loadChildren: () => import('./+dashboard/dashboard.module').then((m) => m.DashboardModule),
    //     },
    //     {
    //       path: 'billing',
    //       loadChildren: () => import('./+billing/billing.module').then((m) => m.BillingModule),
    //     },
    //     {
    //       path: 'promo-areas',
    //       loadChildren: () => import('./+promo-area/promo-area.module').then((m) => m.PromoAreaModule),
    //     },
    //     {
    //       path: 'settings',
    //       loadChildren: () => import('./+setting/setting.module').then((m) => m.SettingModule),
    //     },
    //     {
    //       path: 'redirect',
    //       loadChildren: () => import('./+redirect/redirect.module').then((m) => m.RedirectModule),
    //     },
    //     {
    //       path: 'v2',
    //       children: [
    //         {
    //           path: 'restaurants',
    //           loadChildren: () => import('./+vendor/vendor.module').then((m) => m.VendorModule),
    //         },
    //         {
    //           path: 'bookings',
    //           loadChildren: () => import('./+booking_v2/booking.module').then((m) => m.BookingV2Module),
    //         },
    //       ],
    //     },
    //   ],
    },
    // {
    //   path: 'root',
    //   component: RootComponent,
    // },
    {
      path: '**',
      redirectTo: '',
      pathMatch: 'full',
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}