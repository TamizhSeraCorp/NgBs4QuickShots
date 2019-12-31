import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StealthboxComponent } from './stealthbox.component';

describe('StealthboxComponent', () => {
  let component: StealthboxComponent;
  let fixture: ComponentFixture<StealthboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StealthboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StealthboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
