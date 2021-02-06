import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AttributeModule } from '@charbuild/attribute';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AttributeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
