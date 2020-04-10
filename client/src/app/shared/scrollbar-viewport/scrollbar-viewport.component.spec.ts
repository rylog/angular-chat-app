import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollbarViewportComponent } from './scrollbar-viewport.component';

describe('ScrollbarViewportComponent', () => {
  let component: ScrollbarViewportComponent;
  let fixture: ComponentFixture<ScrollbarViewportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollbarViewportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollbarViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
