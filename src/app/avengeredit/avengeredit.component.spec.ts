import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvengereditComponent } from './avengeredit.component';

describe('AvengereditComponent', () => {
  let component: AvengereditComponent;
  let fixture: ComponentFixture<AvengereditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvengereditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvengereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
