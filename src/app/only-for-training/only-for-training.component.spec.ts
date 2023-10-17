import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyForTrainingComponent } from './only-for-training.component';

describe('OnlyForTrainingComponent', () => {
  let component: OnlyForTrainingComponent;
  let fixture: ComponentFixture<OnlyForTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlyForTrainingComponent]
    });
    fixture = TestBed.createComponent(OnlyForTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
