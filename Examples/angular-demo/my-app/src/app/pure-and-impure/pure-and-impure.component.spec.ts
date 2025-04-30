import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureAndImpureComponent } from './pure-and-impure.component';

describe('PureAndImpureComponent', () => {
  let component: PureAndImpureComponent;
  let fixture: ComponentFixture<PureAndImpureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PureAndImpureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PureAndImpureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
