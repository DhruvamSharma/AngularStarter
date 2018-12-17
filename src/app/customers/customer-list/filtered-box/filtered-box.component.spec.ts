import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredBoxComponent } from './filtered-box.component';

describe('FilteredBoxComponent', () => {
  let component: FilteredBoxComponent;
  let fixture: ComponentFixture<FilteredBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
