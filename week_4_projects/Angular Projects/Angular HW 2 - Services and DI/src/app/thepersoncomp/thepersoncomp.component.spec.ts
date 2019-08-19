import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThepersoncompComponent } from './thepersoncomp.component';

describe('ThepersoncompComponent', () => {
  let component: ThepersoncompComponent;
  let fixture: ComponentFixture<ThepersoncompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThepersoncompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThepersoncompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
