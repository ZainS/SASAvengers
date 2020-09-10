import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAvengerComponent } from './new-avenger.component';

describe('NewAvengerComponent', () => {
  let component: NewAvengerComponent;
  let fixture: ComponentFixture<NewAvengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAvengerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAvengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
