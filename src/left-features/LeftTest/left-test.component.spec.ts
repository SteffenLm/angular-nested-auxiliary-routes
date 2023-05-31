import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeftTestComponent } from './left-test.component';

describe('LeftTestComponent', () => {
  let component: LeftTestComponent;
  let fixture: ComponentFixture<LeftTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeftTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
