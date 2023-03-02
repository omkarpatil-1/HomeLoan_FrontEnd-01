import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyprocessComponent } from './applyprocess.component';

describe('ApplyprocessComponent', () => {
  let component: ApplyprocessComponent;
  let fixture: ComponentFixture<ApplyprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyprocessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
