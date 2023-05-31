import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CenterTwoComponent } from './center-two.component';

describe('CenterTwoComponent', () => {
  let component: CenterTwoComponent;
  let fixture: ComponentFixture<CenterTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenterTwoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CenterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
