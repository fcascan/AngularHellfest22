import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedTicketComponent } from './fixed-ticket.component';

describe('FixedTicketComponent', () => {
  let component: FixedTicketComponent;
  let fixture: ComponentFixture<FixedTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
