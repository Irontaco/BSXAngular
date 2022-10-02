import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NemoNamesComponent } from './nemo-names.component';

describe('NemoNamesComponent', () => {
  let component: NemoNamesComponent;
  let fixture: ComponentFixture<NemoNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NemoNamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NemoNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
