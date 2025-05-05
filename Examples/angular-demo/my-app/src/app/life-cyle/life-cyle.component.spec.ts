import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCyleComponent } from './life-cyle.component';

describe('LifeCyleComponent', () => {
  let component: LifeCyleComponent;
  let fixture: ComponentFixture<LifeCyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifeCyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
