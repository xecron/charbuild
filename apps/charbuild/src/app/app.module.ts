import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AttributeModule } from '@charbuild/attribute';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AttributeModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
