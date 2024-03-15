import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodEntriesComponent } from './food-entries.component';

describe('FoodEntriesComponent', () => {
  let component: FoodEntriesComponent;
  let fixture: ComponentFixture<FoodEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodEntriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
