import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NemoPriceInformationComponent } from './nemo-price-information.component';

describe('NemoPriceInformationComponent', () => {
  let component: NemoPriceInformationComponent;
  let fixture: ComponentFixture<NemoPriceInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NemoPriceInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NemoPriceInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
