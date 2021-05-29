import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnPageComponent } from './add-on-page.component';

describe('AddOnPageComponent', () => {
  let component: AddOnPageComponent;
  let fixture: ComponentFixture<AddOnPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOnPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
