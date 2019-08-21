import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryformspageComponent } from './entryformspage.component';

describe('EntryformspageComponent', () => {
  let component: EntryformspageComponent;
  let fixture: ComponentFixture<EntryformspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryformspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryformspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
