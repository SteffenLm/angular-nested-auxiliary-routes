import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CenterOneComponent } from './center-one.component';

describe('CenterOneComponent', () => {
  let component: CenterOneComponent;
  let fixture: ComponentFixture<CenterOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenterOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CenterOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
