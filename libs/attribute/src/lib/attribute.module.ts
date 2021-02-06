import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributeService } from './attribute.service';

@NgModule({
  imports: [CommonModule],
  providers: [AttributeService],
})
export class AttributeModule {}
