import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupProgressComponent } from './signup-progress.component';

describe('SignupProgressComponent', () => {
  let component: SignupProgressComponent;
  let fixture: ComponentFixture<SignupProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});