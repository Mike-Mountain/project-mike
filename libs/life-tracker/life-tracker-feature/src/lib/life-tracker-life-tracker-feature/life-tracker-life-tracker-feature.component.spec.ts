import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LifeTrackerLifeTrackerFeatureComponent } from './life-tracker-life-tracker-feature.component';

describe('LifeTrackerLifeTrackerFeatureComponent', () => {
  let component: LifeTrackerLifeTrackerFeatureComponent;
  let fixture: ComponentFixture<LifeTrackerLifeTrackerFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeTrackerLifeTrackerFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LifeTrackerLifeTrackerFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
