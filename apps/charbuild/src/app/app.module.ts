import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@charbuild/shared';
import { AttributeModule } from '@charbuild/attribute';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CreationComponent } from './creation/creation.component';

@NgModule({
  imports: [BrowserModule, SharedModule, AppRoutingModule, BrowserAnimationsModule, AttributeModule],
  declarations: [AppComponent, HomeComponent, CreationComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
