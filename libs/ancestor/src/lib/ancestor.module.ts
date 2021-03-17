import { NgModule } from '@angular/core';
import { SharedModule } from '@charbuild/shared';
import { AncestorSelectorComponent } from './ancestor-selector/ancestor-selector.component';

@NgModule({
  imports: [SharedModule],
  providers: [],
  declarations: [AncestorSelectorComponent],
  exports: [AncestorSelectorComponent],
})
export class AncestorModule {}
