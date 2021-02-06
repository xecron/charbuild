import { SharedModule } from './shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AttributeModule } from '@charbuild/attribute';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, AttributeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
