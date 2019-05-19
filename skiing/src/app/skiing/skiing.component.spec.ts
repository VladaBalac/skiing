import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiingComponent } from './skiing.component';

describe('SkiingComponent', () => {
  let component: SkiingComponent;
  let fixture: ComponentFixture<SkiingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
