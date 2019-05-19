import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiresortComponent } from './skiresort.component';

describe('SkiresortComponent', () => {
  let component: SkiresortComponent;
  let fixture: ComponentFixture<SkiresortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiresortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiresortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
