import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Daytwo } from './daytwo';

describe('Daytwo', () => {
  let component: Daytwo;
  let fixture: ComponentFixture<Daytwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Daytwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Daytwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
