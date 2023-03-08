import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSanctionComponent } from './view-sanction.component';

describe('ViewSanctionComponent', () => {
  let component: ViewSanctionComponent;
  let fixture: ComponentFixture<ViewSanctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSanctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSanctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
