import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFilterResultComponent } from './student-filter-result.component';

describe('StudentFilterResultComponent', () => {
  let component: StudentFilterResultComponent;
  let fixture: ComponentFixture<StudentFilterResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFilterResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFilterResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
