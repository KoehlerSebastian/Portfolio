import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressPageComponent } from './impress-page.component';

describe('ImpressPageComponent', () => {
  let component: ImpressPageComponent;
  let fixture: ComponentFixture<ImpressPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpressPageComponent]
    });
    fixture = TestBed.createComponent(ImpressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
