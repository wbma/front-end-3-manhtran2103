import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitransitComponent } from './digitransit.component';

describe('DigitransitComponent', () => {
  let component: DigitransitComponent;
  let fixture: ComponentFixture<DigitransitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitransitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitransitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
