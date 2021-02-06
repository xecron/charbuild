import { SharedModule } from './../../../../apps/charbuild/src/app/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributeService } from './attribute.service';
import { AttributeSelectorComponent } from './attribute-selector/attribute-selector.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  providers: [AttributeService],
  declarations: [AttributeSelectorComponent],
  exports: [AttributeSelectorComponent],
})
export class AttributeModule {}
