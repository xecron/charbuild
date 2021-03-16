import { NgModule } from '@angular/core';
import { PreloadAllModules } from '@angular/router';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CreationComponent } from './creation/creation.component';
import { CraftingComponent } from './crafting/crafting.component';


export const routes = [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'creation',
      component: CreationComponent,
    },
    {
      path: 'crafting',
      component: CraftingComponent,
    },
    {
      path: '**',
      redirectTo: 'home',
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