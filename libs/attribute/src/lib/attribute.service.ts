import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { bufferCount, take, takeLast } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  // primary
  strenght: BehaviorSubject<number>;
  intelligence: BehaviorSubject<number>;
  agility: BehaviorSubject<number>;
  
  // secondary
  stamina: BehaviorSubject<number>;
  speed: BehaviorSubject<number>;
  willpower: BehaviorSubject<number>;

/** 
Attribute Synergy System:
Agility = Speed ++ / -- Willpower 
Intelligence = Willpower ++ / -- Stamina
Strength = Stamina ++ /  -- Speed
**/


  constructor() {
    this.strenght = new BehaviorSubject(0);
    this.intelligence = new BehaviorSubject(0);
    this.agility = new BehaviorSubject(0);
    this.stamina = new BehaviorSubject(0);
    this.speed = new BehaviorSubject(0);
    this.willpower = new BehaviorSubject(0);
  }


  setStr(value: number): void {
    this.strenght.next(value);
  }

  setAgi(value: number): void {
    this.agility.next(value);
  }

  setInt(value: number): void {
    this.intelligence.next(value);
  }


  setStamina(value: number): void {
    this.stamina.next(this.bonusRatioCalc(this.strenght.getValue(), this.intelligence.getValue(), value));
  }

  setSpeed(value: number): void {
    this.speed.next(this.bonusRatioCalc(this.agility.getValue(), this.strenght.getValue(), value));
  }

  setWillpower(value: number): void {
    this.willpower.next(this.bonusRatioCalc(this.intelligence.getValue(), this.agility.getValue(), value));
  }

  private bonusRatioCalc(positiveAttr: number, negativeAttr: number, newValue: number): number {
    const distincVal = Math.abs(positiveAttr - negativeAttr);
    const bonusRatio = Math.log10(1 + distincVal);

    if (positiveAttr > negativeAttr) {
      return Math.round(newValue * bonusRatio);
    } else if (negativeAttr > positiveAttr) {
      return Math.round(newValue / bonusRatio);
    } else if (positiveAttr == negativeAttr) {
      return Math.round(newValue);
    }
  }
}
