import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LifeTrackerLifeTrackerUiComponent } from './life-tracker-life-tracker-ui.component';

describe('LifeTrackerLifeTrackerUiComponent', () => {
  let component: LifeTrackerLifeTrackerUiComponent;
  let fixture: ComponentFixture<LifeTrackerLifeTrackerUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeTrackerLifeTrackerUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LifeTrackerLifeTrackerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
