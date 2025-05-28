import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationRequestComponent } from './verification-request.component';

describe('VerificationRequestComponent', () => {
  let component: VerificationRequestComponent;
  let fixture: ComponentFixture<VerificationRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerificationRequestComponent]
    });
    fixture = TestBed.createComponent(VerificationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
