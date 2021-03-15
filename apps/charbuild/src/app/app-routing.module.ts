import { NgModule } from '@angular/core';
import { PreloadAllModules } from '@angular/router';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes = [
    {
      path: '',
      component: HomeComponent,
      children: [
        {
          path: 'attribute',
          loadChildren: () => import('@charbuild/attribute').then((m) => m.AttributeModule),
        },
      ],
    },
    {
      path: '**',
      redirectTo: '',
      pathMatch: 'full',
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    })],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}