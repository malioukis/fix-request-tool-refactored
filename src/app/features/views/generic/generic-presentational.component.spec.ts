import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericPresentationalComponent } from './generic-presentational.component';

describe('GenericPresentationalComponent', () => {
  let component: GenericPresentationalComponent;
  let fixture: ComponentFixture<GenericPresentationalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericPresentationalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericPresentationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
