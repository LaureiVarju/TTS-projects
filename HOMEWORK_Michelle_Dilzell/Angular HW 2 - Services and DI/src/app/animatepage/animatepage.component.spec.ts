import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatepageComponent } from './animatepage.component';

describe('AnimatepageComponent', () => {
  let component: AnimatepageComponent;
  let fixture: ComponentFixture<AnimatepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
