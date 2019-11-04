import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceidComponent } from './faceid.component';

describe('FaceidComponent', () => {
  let component: FaceidComponent;
  let fixture: ComponentFixture<FaceidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceidComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
