import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPlaceholderComponent } from './navbar-placeholder.component';

describe('NavbarPlaceholderComponent', () => {
  let component: NavbarPlaceholderComponent;
  let fixture: ComponentFixture<NavbarPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarPlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
