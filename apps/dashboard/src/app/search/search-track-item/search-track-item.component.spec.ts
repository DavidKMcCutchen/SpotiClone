import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTrackItemComponent } from './search-track-item.component';

describe('SearchTrackItemComponent', () => {
  let component: SearchTrackItemComponent;
  let fixture: ComponentFixture<SearchTrackItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTrackItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTrackItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
