import { Component } from '@angular/core';
import { AttributeService } from '@charbuild/attribute';

@Component({
  selector: 'charbuild-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'charbuild';

  constructor(private readonly attributeService: AttributeService) {
    this.attributeService.setStr(100);
    this.attributeService.setInt(100);
    this.attributeService.setAgi(100);

    this.attributeService.setStamina(100);
    this.attributeService.setSpeed(100);
    this.attributeService.setWillpower(100);

    console.log(this.attributeService.stamina.getValue())
    console.log(this.attributeService.speed.getValue())
    console.log(this.attributeService.willpower.getValue())
  }
}
