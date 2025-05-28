import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookApiComponent } from './facebook-api.component';

describe('FacebookApiComponent', () => {
  let component: FacebookApiComponent;
  let fixture: ComponentFixture<FacebookApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
