import { NgModule } from '@angular/core';
import { SharedModule } from '@charbuild/shared';

import { AttributeService } from './attribute.service';
import { AttributeSelectorComponent } from './attribute-selector/attribute-selector.component';

@NgModule({
  imports: [SharedModule],
  providers: [AttributeService],
  declarations: [AttributeSelectorComponent],
  exports: [AttributeSelectorComponent],
})
export class AttributeModule {}
