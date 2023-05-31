import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CenterTestComponent } from './center-test.component';

describe('CenterTestComponent', () => {
  let component: CenterTestComponent;
  let fixture: ComponentFixture<CenterTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenterTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CenterTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
