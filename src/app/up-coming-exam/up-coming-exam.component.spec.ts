import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpComingExamComponent } from './up-coming-exam.component';

describe('UpComingExamComponent', () => {
  let component: UpComingExamComponent;
  let fixture: ComponentFixture<UpComingExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpComingExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpComingExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
