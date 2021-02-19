import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSlider } from '@angular/material/slider';
import { AttributeService } from '../attribute.service';

@Component({
  selector: 'charbuild-attribute-selector',
  templateUrl: './attribute-selector.component.html',
  styleUrls: ['./attribute-selector.component.scss']
})
export class AttributeSelectorComponent implements OnInit, AfterViewInit {

  public selectedTabIndex: number = 0;

  public maximumAttrPoints: number = 250;
  
  public strength: number = 0;
  public agility: number = 0;
  public intelligence: number = 0;

  public stamina: number = 0;
  public speed: number = 0;
  public willpower: number = 0;

  @ViewChild('strSlider') private strSlider: MatSlider;
  @ViewChild('agiSlider') private agiSlider: MatSlider;
  @ViewChild('intSlider') private intSlider: MatSlider;

  @ViewChild('staminaSlider') private staminaSlider: MatSlider;
  @ViewChild('speedSlider') private speedSlider: MatSlider;
  @ViewChild('willpowerSlider') private willpowerSlider: MatSlider;

  constructor(private attributeService: AttributeService) { }


  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.strSlider.registerOnChange(val => {
      if (val > this.remainingStrPoints) {
        this.strength = this.remainingStrPoints;
        this.strSlider.value = this.remainingStrPoints;
      } else {
        this.strength = val;
      }
    })

    this.agiSlider.registerOnChange(val => {
      if (val > this.remainingAgiPoints) {
        this.agility = this.remainingAgiPoints;
        this.agiSlider.value = this.remainingAgiPoints;
      } else {
        this.agility = val;
      }
    })

    this.intSlider.registerOnChange(val => {
      if (val > this.remainingIntPoints) {
        this.intelligence = this.remainingIntPoints;
        this.intSlider.value = this.remainingIntPoints;
      } else {
        this.intelligence = val;
      }
    })

    this.staminaSlider.registerOnChange(val => {
      if (val > this.remainingStaminaPoints) {
        this.stamina = this.remainingStaminaPoints;
        this.staminaSlider.value = this.remainingStaminaPoints;
      } else {
        this.stamina = val;
      }
    })

    this.speedSlider.registerOnChange(val => {
      if (val > this.remainingSpeedPoints) {
        this.speed = this.remainingSpeedPoints;
        this.speedSlider.value = this.remainingSpeedPoints;
      } else {
        this.speed = val;
      }
    })

    this.willpowerSlider.registerOnChange(val => {
      if (val > this.remainingWillpowerPoints) {
        this.willpower = this.remainingWillpowerPoints;
        this.willpowerSlider.value = this.remainingWillpowerPoints;
      } else {
        this.willpower = val;
      }
    })
  }

  get remainingStrPoints(): number {
    return this.maximumAttrPoints - (this.agility + this.intelligence);
  }

  get remainingAgiPoints(): number {
    return this.maximumAttrPoints - (this.strength + this.intelligence);
  }

  get remainingIntPoints(): number {
    return this.maximumAttrPoints - (this.strength + this.agility);
  }

  get remainingStaminaPoints(): number {
    return this.maximumAttrPoints - (this.speed + this.willpower);
  }

  get remainingSpeedPoints(): number {
    return this.maximumAttrPoints - (this.stamina + this.willpower);
  }

  get remainingWillpowerPoints(): number {
    return this.maximumAttrPoints - (this.stamina + this.speed);
  }

  get remainingPrimaryAttrPoints(): number {
    return this.maximumAttrPoints - (this.strength + this.agility + this.intelligence);
  }

  get remainingSecondaryAttrPoints(): number {
    return this.maximumAttrPoints - (this.stamina + this.speed + this.willpower);
  }

  resetPrimaryAttr(): void {
    this.strength = 0;
    this.agility = 0;
    this.intelligence = 0;

    this.strSlider.value = 0;
    this.agiSlider.value = 0;
    this.intSlider.value = 0;

    this.resetSecondaryAttr();
  }

  resetSecondaryAttr(): void {
    this.stamina = 0;
    this.speed = 0;
    this.willpower = 0;

    this.staminaSlider.value = 0;
    this.speedSlider.value = 0;
    this.willpowerSlider.value = 0;
  }

  done(): void {
    this.attributeService.setStr(this.strength);
    this.attributeService.setAgi(this.agility);
    this.attributeService.setInt(this.intelligence);
    this.attributeService.setStamina(this.stamina);
    this.attributeService.setSpeed(this.speed);
    this.attributeService.setWillpower(this.willpower);

    this.stamina = this.attributeService.stamina.getValue();
    this.speed = this.attributeService.speed.getValue();
    this.willpower = this.attributeService.willpower.getValue();

    this.selectedTabIndex = 2;
  }
}
