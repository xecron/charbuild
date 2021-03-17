import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncestorSelectorComponent } from './ancestor-selector.component';

describe('AncestorSelectorComponent', () => {
  let component: AncestorSelectorComponent;
  let fixture: ComponentFixture<AncestorSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AncestorSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AncestorSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
