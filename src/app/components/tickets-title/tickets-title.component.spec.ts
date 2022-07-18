import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsTitleComponent } from './tickets-title.component';

describe('TicketsTitleComponent', () => {
  let component: TicketsTitleComponent;
  let fixture: ComponentFixture<TicketsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
