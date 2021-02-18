import { AfterViewInit, Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { MatSlider } from '@angular/material/slider';

@Component({
  selector: 'charbuild-attribute-selector',
  templateUrl: './attribute-selector.component.html',
  styleUrls: ['./attribute-selector.component.scss']
})
export class AttributeSelectorComponent implements OnInit, AfterViewInit {

  public maximumAttrPoints: number = 250;
  
  public strength: number = 0;
  public agility: number = 0;
  public intelligence: number = 0;


  @ViewChild('strSlider') private strSlider: MatSlider;
  @ViewChild('agiSlider') private agiSlider: MatSlider;
  @ViewChild('intSlider') private intSlider: MatSlider;

  constructor() { }


  ngOnInit(): void {}

  ngAfterViewInit() {
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

  get remainingAttrPoints(): number {
    return this.maximumAttrPoints - (this.strength + this.agility + this.intelligence);
  }

  resetPrimaryAttr(): void {
    this.strength = 0;
    this.agility = 0;
    this.intelligence = 0;

    this.strSlider.value = 0;
    this.agiSlider.value = 0;
    this.intSlider.value = 0;
  }
}
