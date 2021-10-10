import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchArtistItemComponent } from './search-artist-item.component';

describe('SearchArtistItemComponent', () => {
  let component: SearchArtistItemComponent;
  let fixture: ComponentFixture<SearchArtistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchArtistItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchArtistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
