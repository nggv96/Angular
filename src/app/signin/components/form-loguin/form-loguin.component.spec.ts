import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoguinComponent } from './form-loguin.component';

describe('FormLoguinComponent', () => {
  let component: FormLoguinComponent;
  let fixture: ComponentFixture<FormLoguinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLoguinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoguinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
