import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDemandeComponent } from './single-demande.component';

describe('SingleDemandeComponent', () => {
  let component: SingleDemandeComponent;
  let fixture: ComponentFixture<SingleDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
