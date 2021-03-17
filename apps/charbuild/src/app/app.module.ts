import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@charbuild/shared';
import { AttributeModule } from '@charbuild/attribute';
import { AncestorModule } from '@charbuild/ancestor';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CreationComponent } from './creation/creation.component';
import { CraftingComponent } from './crafting/crafting.component';
import { BuildsComponent } from './builds/builds.component';

@NgModule({
  imports: [BrowserModule, SharedModule, AppRoutingModule, BrowserAnimationsModule, AttributeModule, AncestorModule],
  declarations: [AppComponent, HomeComponent, CreationComponent, CraftingComponent, BuildsComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
