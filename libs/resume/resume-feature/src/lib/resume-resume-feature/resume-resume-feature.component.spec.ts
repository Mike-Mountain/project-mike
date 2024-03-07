import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeResumeFeatureComponent } from './resume-resume-feature.component';

describe('ResumeResumeFeatureComponent', () => {
  let component: ResumeResumeFeatureComponent;
  let fixture: ComponentFixture<ResumeResumeFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeResumeFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeResumeFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
