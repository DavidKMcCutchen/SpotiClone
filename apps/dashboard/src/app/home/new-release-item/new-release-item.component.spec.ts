import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReleaseItemComponent } from './new-release-item.component';

describe('NewReleaseItemComponent', () => {
  let component: NewReleaseItemComponent;
  let fixture: ComponentFixture<NewReleaseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReleaseItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReleaseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
