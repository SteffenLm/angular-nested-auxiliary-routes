import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RightTestComponent } from './right-test.component';

describe('RightTestComponent', () => {
  let component: RightTestComponent;
  let fixture: ComponentFixture<RightTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RightTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
