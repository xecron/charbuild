import { AfterViewInit, Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { MatSlider } from '@angular/material/slider';

@Component({
  selector: 'charbuild-attribute-selector',
  templateUrl: './attribute-selector.component.html',
  styleUrls: ['./attribute-selector.component.scss']
})
export class AttributeSelectorComponent implements OnInit, AfterViewInit {

  private maximumAttrPoints: number = 250;
  
  public strength: number = 0;
  public agility: number = 0;
  public intelligence: number = 0;


  @ViewChild('strSlider') private strSlider: MatSlider;
  @ViewChild('agiSlider') private agiSlider: MatSlider;
  @ViewChild('intSlider') private intSlider: MatSlider;

  constructor() { }


  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log(this.strSlider)

    this.strSlider.registerOnChange(val => {
      this.strength = val;
      console.log(this.strength)
    })

    this.agiSlider.registerOnChange(val => {
      this.agility = val;
      console.log(this.agility)
    })

    this.intSlider.registerOnChange(val => {
      this.intelligence = val;
      console.log(this.intelligence)
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

}
