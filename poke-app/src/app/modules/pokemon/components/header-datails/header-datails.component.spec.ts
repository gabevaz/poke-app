import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDatailsComponent } from './header-datails.component';

describe('HeaderDatailsComponent', () => {
  let component: HeaderDatailsComponent;
  let fixture: ComponentFixture<HeaderDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDatailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
